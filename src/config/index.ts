import { ApplicationConfig } from './app.conf';
import { DBConfig } from './db.conf';
import { Routes } from './routes.conf';
import * as express from 'express';
export class Config {
  static async init(app: express.Application, router: express.Router) {
    try {
      ApplicationConfig.init(app);
      await DBConfig.init();
      Routes.init(app, router);
    } catch (error) {
      throw error;
    }
  }
}
