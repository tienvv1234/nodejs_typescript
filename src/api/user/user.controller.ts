import * as express from 'express';
import { UserDAO } from './user.dao';
import { UserDTO } from './dto/user';
import { User } from './user.model';
import { Cache } from '../../service/cache';
export class UserController {
  constructor() { }

  public async getAll(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
    userDAO: UserDAO
  ) {
    try {
      let users: any = await Cache.getCache('user1');
      if (!users) {
        users = await userDAO.getAllUser();
        // await cache.client.set('user', JSON.stringify(users));
        await Cache.createCache('user1', users);
      }

      const userDTOs = users.map((user: User) => {
        return new UserDTO(user);
      });
      res.json(userDTOs);
    } catch (error) {
      next(error);
    }
  }
}
