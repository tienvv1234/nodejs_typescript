import { User } from './user.model';
import { InternalServerError } from '../../errors/InternalServerError';
export class UserDAO {
  constructor() {}

  public async getAllUser() {
    try {
      return await User.query();
    } catch (error) {
      throw new InternalServerError(error);
    }
  }
}
