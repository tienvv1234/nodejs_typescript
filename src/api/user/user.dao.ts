import { User } from './user.model';
import { UserDetail } from '../userdetail/userdetail.models';
import { InternalServerError } from '../../errors/InternalServerError';
import { Cache } from '../../service/cache';
export class UserDAO {
    constructor() { }

    public async getAllUser() {
        try {
            // return await User.query().runBefore(Cache.getCache.bind(Cache, 'dsfds'));
            return await User.query();
        } catch (error) {
            throw new InternalServerError(UserDAO.name + ' ' + error.message);
        }
    }

    public async getUserInfoById(id: number) {
        try {
            // return await User.query().runBefore(Cache.getCache.bind(Cache, 'dsfds'));
            return await User.query()
                .findById(id)
                .select('users.id')
                .eager('userDetails')
                .modify('defaultSelects');
            // .pick(UserDetail, ['id']);
            //   const user = await User.query().findById(2);
            //   console.log(user);
            //   const children = await user.$relatedQuery('children');
            //   console.log('children', children);
            //   return children;
        } catch (error) {
            console.log(error);
            throw new InternalServerError(UserDAO.name + ': ' + error.message);
        }
    }

    // public async createNewUser(user: user)
}
