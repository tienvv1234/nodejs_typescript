import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import * as compression from 'compression';
export class RoutesConfig {
  static init(application: express.Application): void {
    application.use(bodyParser.urlencoded({ extended: true }));
    application.use(bodyParser.json());
    application.use(helmet());
    application.use(compression());
  }
}
