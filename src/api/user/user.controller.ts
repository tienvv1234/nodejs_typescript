import * as express from 'express';
import { UserDAO } from './user.dao';
export class UserController {
  constructor() {}

  public async getAll(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
    userDAO: UserDAO
  ) {
    try {
      const users = await userDAO.getAllUser();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
}
