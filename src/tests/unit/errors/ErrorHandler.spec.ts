import { expect, sinon } from '../../helpers/chai';
import { InternalServerError } from '../../../errors/InternalServerError';
import { errorHandler } from '../../../errors/ErrorHandler';
import 'mocha';
describe('ErrorHandler', () => {
  it('Handles Error', () => {
    const res = { status: sinon.stub(), json: sinon.spy() };
    res.status.withArgs(500).returns(res);
    const req = {};
    const message = 'Internal server error';
    const error = new InternalServerError(message);
    const next = sinon.spy();
    errorHandler(error, req, res, next);
    return expect(
      res.json.withArgs(error)
    ).to.be.calledOnce
  });
});
