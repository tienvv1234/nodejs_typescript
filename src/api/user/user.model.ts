import { BaseModel } from '../base/base.model';

export class User extends BaseModel<User> {
  readonly id: number;
  username: string;
  password: string;

  // profile: UserProfile; // <--- where UserProfile is the related model

  static tableName = 'users';
}
