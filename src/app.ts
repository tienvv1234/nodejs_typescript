import * as express from 'express';
import { Config } from './config/index';
const app = express();
const PORT = process.env.PORT || 3000;

Config.init(app);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
