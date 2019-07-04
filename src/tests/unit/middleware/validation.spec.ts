import { validation } from '../../../middleware/validation';
import { Validator, ValidationError } from 'class-validator';
import { expect, sinon } from '../../helpers/chai';
import { UserDTO } from '../../../api/user/dto/user';
import 'mocha';

describe('Validation middleware', () => {
  it('pass through validation with UserDTO', () => {
    const req = { body:{username: 'username', password: 'password'} };
    const res = {};
    const next = sinon.spy();
    const deserialize = sinon.stub().withArgs(UserDTO, req.body).returns({});
    const validator = { validateSync: sinon.stub()
        .withArgs()
        .returns({})};
  });
});
