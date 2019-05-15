import { User } from './user.model';
import { InternalServerError } from '../../errors/InternalServerError';
import { DBConfig } from '../../config/db.conf';
export class UserDAO {

    constructor() {
    }

    public async getAllUser() {
        try {
            return await User.query(DBConfig.Instance);
        } catch (error) {
            throw new InternalServerError(error);
        }
    }
}