"use strict";const axios = require('axios');

async function criaPlayList(playlistName, spotifyToken, userId) {
  const array = [];
  const config = {
    headers: {
      Authorization: `Bearer ${spotifyToken}`,
    },
  };
  const body = {
    name: playlistName,
    description: 'Playlist build with youtube2spotify',
    public: true,
  };
  await axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`, body, config).then((response) => {
    const { id } = response.data;
    array.push(id);
  }).catch((error) => {
    console.log('aqui');
  });
  return array;
}
exports.playlist = criaPlayList;
