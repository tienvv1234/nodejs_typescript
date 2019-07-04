import { ApplicationConfig } from './app.conf';
import { DBConfig } from './db.conf';
import { Routes } from './routes.conf';
import { Cache } from '../service/cache';
import * as express from 'express';
import { errorHandler } from '../errors/ErrorHandler';
export class Config {
  static async init(app: express.Application, router: express.Router) {
    try {
      ApplicationConfig.init(app);
      Routes.init(app, router);
      await DBConfig.init();
      await Cache.init();
      app.use(errorHandler);
    } catch (error) {
      throw error;
    }
  }
}
