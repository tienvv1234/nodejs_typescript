import * as express from 'express';
import { UserRouter } from '../api/user/user.router';
export class Routes {
    static init(app: express.Application, router: express.Router) {
        new UserRouter().init(router);
        app.use('/api', router);
    }
}
