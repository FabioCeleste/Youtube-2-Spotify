"use strict";Object.defineProperty(exports, "__esModule", {value: true});
const magic = require('../magic/getTitles');
const getYouid = require('../magic/getYoutubeIdList');


class Home {
  async getSpotifyAcess(req, res) {
    res.redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=701c5faa9924497cb29e5ee66e8c8a30&scope=playlist-modify-public&redirect_uri=${process.env.REDIRECT_URL}`);
  }

  async result(req, res) {
    try {
      const youtubeFullUrl = req.body.urlyoutube;
      const youtubeId = getYouid.getYouId(youtubeFullUrl);

      const spotifyCode = req.body.spotifycode;
      const links = await magic.magic(youtubeId, spotifyCode);
      console.log(links[1]);
      const link = links[0];
      res.render('result', { urlss: `<a href="${link}"> Click aqui para acessar sua playlist </a>`, notFound: links[1] });
    } catch (e) {
      res.send(`${e}`);
    }
  }

  async middleware(req, res) {
    res.render('middleware');
  }

  async home(req, res) {
    res.render('home');
  }
}
exports. default = new Home();
