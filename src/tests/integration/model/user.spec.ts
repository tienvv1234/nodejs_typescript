import { expect } from '../../helpers/chai';
import { createUser, emptyTable } from '../../helpers/fixtures';
import { User } from '../../../api/user/user.model';
import { DBConfig } from '../../../config/db.conf';
describe('User instance', () => {
    DBConfig.init();

    // after('clean DB after all tests', () => {
    //     return emptyTable(DBConfig.Instance, [User]);
    // });

    describe('Integration with User Model', () => {
        beforeEach('creates fixtures', async () => {
            await emptyTable(DBConfig.Instance, [User]);
            await createUser({}, User);
        });

        it('finds user by id', () => {
            const userObj = User.query().findById(1);
            expect(userObj).to.not.be.null;
        });
    });
});