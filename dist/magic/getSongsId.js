"use strict";const axios = require('axios');

async function search(arrayOfMusics, spotifyToken) {
  const cantFind = [];
  const find = [];
  let finalArray = [];
  for (const name of arrayOfMusics) {
    await axios.get(`https://api.spotify.com/v1/search?q=${name}&type=track&limit=1`, {
      params: {},
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    }).then((response) => {
      if (response.data.tracks.items) {
        const { items } = response.data.tracks;
        return items[0];
      }
      return 'error';
    }).then((items) => {
      if (!items) {
        cantFind.push(name);
      }
      if (items) {
        find.push(items.id);
      }
    }).then((resp) => {
      finalArray = [[...find], [...cantFind]];
    });
  }
  // console.log(finalArray)
  return finalArray;
}

exports.search = search;
