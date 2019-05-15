import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cors from 'cors';
import { errorHandler } from '../errors/ErrorHandler';
import morgan = require('morgan');
export class ApplicationConfig {
  static init(application: express.Application): void {
    application.use(bodyParser.urlencoded({ extended: true }));
    application.use(bodyParser.json());
    application.use(helmet());
    application.use(compression());
    application.use(cors());
    application.use(errorHandler);
    application.use(
      morgan('dev', {
        skip: function(req, res) {
          return res.statusCode < 400;
        },
        stream: process.stderr
      })
    );

    application.use(
      morgan('dev', {
        skip: function(req, res) {
          return res.statusCode >= 400;
        },
        stream: process.stdout
      })
    );
  }
}
