import { User } from './user.model';
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
}
