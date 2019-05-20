import * as express from 'express';
import { UserController } from './user.controller';
import { UserDAO } from './user.dao';
import { UserDTO } from './dto/user';
import { validation } from '../../middleware/validation';
export class UserRouter {
  private userController: UserController;

  constructor() {
    this.userController = new UserController();
  }

  init(router: express.Router) {
    router
      .route('/users')
      .get(validation(UserDTO), (req, res, next) =>
        this.userController.getAll(req, res, next, new UserDAO())
      );
  }
}
