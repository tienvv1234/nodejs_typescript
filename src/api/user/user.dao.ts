import { User } from './user.model';
import { InternalServerError } from '../../errors/InternalServerError';
import { Cache } from '../../service/cache';
export class UserDAO {
  constructor() {}

  public async getAllUser() {
    try {
      return await User.query().runBefore(Cache.getCache('dsfds'));
    } catch (error) {
      throw new InternalServerError(error);
    }
  }
}
