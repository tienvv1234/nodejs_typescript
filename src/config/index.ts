import { ApplicationConfig } from './app.conf';
import { DBConfig } from './db.conf';
import * as express from 'express';
export class Config {
  static init(app: express.Application) {
    ApplicationConfig.init(app);
    DBConfig.init();
  }
}
