import { BaseModel } from '../base/base.model';
import { Model } from 'objection';
import { UserDetail } from '../userdetail/userdetail.models';
export class User extends BaseModel<User> {
    readonly id: number;
    username: string;
    password: string;

    userDetails: UserDetail; // <--- where UserProfile is the related model

    static tableName = 'users';
    static get relationMappings() {
        return {
            userDetails: {
                relation: Model.HasOneRelation,
                modelClass: UserDetail,
                join: {
                    from: 'users.id',
                    to: 'userdetail.user_id'
                }
            }
        };
    }

    static get modifiers() {
        return {
            defaultSelects: (builder: { select: (arg0: string, arg1: string) => void; }) => builder.select('id', 'password')
        };
    }

}
