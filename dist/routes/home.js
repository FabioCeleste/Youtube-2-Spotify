"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _home = require('../controllers/home'); var _home2 = _interopRequireDefault(_home);

const router = new (0, _express.Router)();

router.get('/', _home2.default.home);
router.get('/spotify', _home2.default.getSpotifyAcess);
router.get('/i', _home2.default.middleware);
router.post('/result', _home2.default.result);


exports. default = router;
