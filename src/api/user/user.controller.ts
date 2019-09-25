import * as express from 'express';
import { UserDAO } from './user.dao';
import { UserDTO } from './dto/user';
import { User } from './user.model';
import { Cache } from '../../service/cache';
import { NotFoundError } from '../../errors/NotFoundError';
export class UserController {
    constructor() { }

    public async getAll(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
        userDAO: UserDAO
    ) {
        try {
            // let users: any = await Cache.getCache('user1');
            let users: any = await userDAO.getAllUser();
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

    public async getUserInfoById(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
        userDAO: UserDAO
    ) {
        try {
            // let users: any = await Cache.getCache('user1');
            console.log(req.params);
            const user: any = await userDAO.getUserInfoById(req.params.id);
            if (!user) {
                throw new NotFoundError('User not found');
            }

            console.log('user', user);
            const userDTO = new UserDTO(user);
            console.log('userDTO', userDTO);
            res.json(userDTO);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    public async createNewUser(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
        userDAO: UserDAO
    ) {
        try {
            // let users: any = await Cache.getCache('user1');
            console.log(req.params);
            const user: any = await userDAO.getUserInfoById(req.params.id);
            if (!user) {
                throw new NotFoundError('User not found');
            }

            console.log('user', user);
            const userDTO = new UserDTO(user);
            console.log('userDTO', userDTO);
            res.json(userDTO);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}
