import { ApplicationConfig } from './app.conf';
import { DBConfig } from './db.conf';
import { Routes } from './routes.conf';
import { Cache } from '../service/cache';
import * as express from 'express';
import { errorHandler } from '../errors/ErrorHandler';
export class Config {
  static init(app: express.Application, router: express.Router) {
    try {
      ApplicationConfig.init(app);
      Routes.init(app, router);
      DBConfig.init();
      Cache.init();
      app.use(errorHandler);
    } catch (error) {
      console.log('1111', error);
      throw error;
    }
  }
}
