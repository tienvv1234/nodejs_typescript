import * as express from 'express';
import { RoutesConfig } from './config/routes.conf';
import { Routes } from './routes/index';
const app = express();
const PORT = process.env.PORT || 3000;

RoutesConfig.init(app);
Routes.init(app, express.Router());
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
