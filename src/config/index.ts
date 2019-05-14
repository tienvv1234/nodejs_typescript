import { ApplicationConfig } from './app.conf';
import { DBConfig } from './db.conf';
import * as express from 'express';
export class Config {
  static async init(app: express.Application) {
    try {
      ApplicationConfig.init(app);
      await DBConfig.init();
    } catch (error) {
      throw error;
    }
  }
}
