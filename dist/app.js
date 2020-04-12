"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _cookieparser = require('cookie-parser'); var _cookieparser2 = _interopRequireDefault(_cookieparser);
require('dotenv/config');

var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);


class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.set('views', _path2.default.resolve(__dirname, '..', 'views'));
    this.app.set('view engine', 'ejs');
    this.app.use(_cookieparser2.default.call(void 0, ));
    this.app.use(_express2.default.static(_path2.default.resolve(__dirname, '..', 'public')));
  }

  routes() {
    this.app.use('/', _home2.default);
  }
}

exports. default = new App().app;
