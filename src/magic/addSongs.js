const axios = require('axios');

async function addSongs(song, spotifyToken, playlistId) {
  const config = {
    headers: {
      Authorization: `Bearer ${spotifyToken}`,
    },
  };

  const body = {
    uris: song,
  };

  axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, body, config);
}

exports.addSongs = addSongs;
