// const request = 'https://www.youtube.com/playlist?list=PLZpMTtHZK0tzhgqQi0PwD9BoP-Uzf9oSn';
// const url_parts = url.parse(request, true);
// const { query } = url_parts;
// console.log(query.list);


function getYoutube(link) {
  const url = require('url');
  const url_parts = url.parse(link, true);
  const { query } = url_parts;
  return query.list;
}

exports.getYouId = getYoutube;
