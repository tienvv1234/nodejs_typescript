import * as express from 'express';
import { Config } from './config/index';
import { logger } from './service/logger';
const app = express();
const PORT = process.env.PORT || 3000;

Config.init(app)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch(error => {
    logger.error(error);
  });
