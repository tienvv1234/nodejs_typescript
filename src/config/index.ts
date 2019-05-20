import { ApplicationConfig } from './app.conf';
import { DBConfig } from './db.conf';
import { Routes } from './routes.conf';
import { Cache } from '../service/cache';
import * as express from 'express';
export class Config {
  static async init(app: express.Application, router: express.Router) {
    try {
      Routes.init(app, router);
      ApplicationConfig.init(app);
      await DBConfig.init();
      await Cache.init();
    } catch (error) {
      throw error;
    }
  }
}
