import * as express from 'express';
import { UserDAO } from './user.dao';
import { UserDTO } from './dto/user';
import { User } from './user.model';
import { cache } from '../../service/cache';
export class UserController {
  constructor() { }

  public async getAll(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
    userDAO: UserDAO
  ) {
    try {
      console.log(1)
      let users: any = await cache.getCache('user1');
      console.log('users', users)
      console.log(2)
      if (!users) {
        console.log(3)
        users = await userDAO.getAllUser();
        console.log(4)
        // await cache.client.set('user', JSON.stringify(users));
        await cache.createCache('user1', users);
        console.log(5)
      }

      // users = await userDAO.getAllUser();
      const userDTOs = users.map((user: User) => {
        return new UserDTO(user);
      });
      res.json(userDTOs);
    } catch (error) {
      next(error);
    }
  }
}
