const axios = require('axios');

const getToken = async (code) => {
  const idarray = [];
  await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      client_id: '701c5faa9924497cb29e5ee66e8c8a30',
      client_secret: 'a72eb80bdc6b4189a24817fb38126c59',
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.REDIRECT_URL,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((token) => {
    const obj = token.data;
    idarray.push(obj.access_token);
  }).catch((e) => console.log(e));
  return idarray[0];
};

exports.getToken = getToken;
