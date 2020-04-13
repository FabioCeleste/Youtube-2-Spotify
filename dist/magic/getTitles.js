"use strict";const axios = require('axios');
const getId = require('./getId');
const criar = require('./createPlaylist');
const search = require('./getSongsId');
const addSongs = require('./addSongs');
const getToken = require('./getToken');


const name = String(Math.floor(Math.random() * (999999999 - 111111111) + 111111111));


async function getTitles(playlistId) {
  const titles = [];
  await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&fields=items%2Fsnippet(title)&key=${process.env.GOOGLE_KEY}`).then((response) => {
    const a = response.data.items;
    a.map((item) => {
      const { title } = item.snippet;
      titles.push(title);
    });
  }).then();
  return titles;
}


async function test(youtubeId, spotifyLogin) {
  const processTitle = [];
  const completeTrackId = [];
  const linkOfPlay = [];
  const titles = await getTitles(youtubeId);
  const spotifyToken = await getToken.getToken(spotifyLogin);

  const userId = await getId.getId(spotifyToken);
  let id = await criar.playlist(name, spotifyToken, userId);
  titles.map((title) => {
    const a = title.replace(/official/ig, '')
      .replace(/featuring/ig, '')
      .replace(/feat/ig, '')
      .replace(/video/ig, '')
      .replace(/1080p/ig, '')
      .replace(/music/ig, '')
      .replace(/Audio/ig, '')
      .replace(/\(([^)]+)\)/g, '')
      .replace(/Soundtrack/ig, '')
      .replace(/HD/ig, '')
      .replace(/Amazon/ig, '')
      .replace(/[^\w\s]/gi, '');
    const finalTitle = a.split(' ').join('-');
    processTitle.push(finalTitle);
  });

  const result = await search.search(processTitle, spotifyToken);
  const tracksId = result[0];
  const notFound = result[1];

  tracksId.map((id) => {
    completeTrackId.push(`spotify:track:${id}`);
  });
  id = id[0];


  addSongs.addSongs(completeTrackId, spotifyToken, id);

  linkOfPlay.push(`https://open.spotify.com/playlist/${id}`);
  return [linkOfPlay[0], [...notFound]];
}

exports.magic = test;
exports.deploy = getTitles;
