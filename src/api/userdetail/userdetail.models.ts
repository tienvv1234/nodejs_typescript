import { BaseModel } from '../base/base.model';
import { Model } from 'objection';
import { User } from '../user/user.model';
export class UserDetail extends BaseModel<UserDetail> {
    readonly id: number;
    firstname: string;
    lastname: string;

    static tableName = 'userdetail';
    static get relationMappings() {
        return {
            parent: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'userdetail.user_id',
                    to: 'users.id'
                }
            }
        };
    }

    static get modifiers() {
        return {
            defaultSelects: (builder: { select: (arg0: string, arg1: string) => void; }) => builder.select('id', 'firstname')
        };
    }
}
