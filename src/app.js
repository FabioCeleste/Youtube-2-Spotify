import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import home from './routes/home';


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.set('views', path.resolve(__dirname, '..', 'views'));
    this.app.set('view engine', 'ejs');
    this.app.use(cookieParser());
    this.app.use(express.static(path.resolve(__dirname, '..', 'public')));
  }

  routes() {
    this.app.use('/', home);
  }
}

export default new App().app;
