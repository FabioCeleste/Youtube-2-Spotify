"use strict";const axios = require('axios');

async function getId(spotifyToken) {
  const array = [];
  const config = {
    headers: {
      Authorization: `Bearer ${spotifyToken}`,
    },
  };

  const body = {};

  await axios.get('https://api.spotify.com/v1/me', config).then((response) => {
    const obj = response.data;
    array.push(obj.id);
  });
  return array[0];
}
exports.getId = getId;
