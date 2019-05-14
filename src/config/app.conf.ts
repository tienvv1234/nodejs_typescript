import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cors from 'cors';
import { errorHandler } from '../errors/ErrorHandler';
export class ApplicationConfig {
  static init(application: express.Application): void {
    application.use(bodyParser.urlencoded({ extended: true }));
    application.use(bodyParser.json());
    application.use(helmet());
    application.use(compression());
    application.use(cors());
    application.use(errorHandler);
  }
}
