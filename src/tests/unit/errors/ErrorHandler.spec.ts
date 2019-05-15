import { expect, sinon } from '../../helpers/chai';
import { InternalServerError } from '../../../errors/InternalServerError';
import { errorHandler } from '../../../errors/ErrorHandler';
import 'mocha';
describe('ErrorHandler', () => {
  it('Handles Error', () => {
    const logger = {
      error: sinon.spy()
    };
    console.log('logger1', logger.error);
    const res = { status: sinon.stub(), json: sinon.spy() };
    res.status.withArgs(500).returns(res);
    const req = {};
    const error = new InternalServerError();
    const next = sinon.spy();
    errorHandler(error, req, res, next);
    expect(logger.error.withArgs(error)).to.be.calledOnce;
    // return Promise.all([
    //   expect(logger.error.withArgs(error)).to.be.calledOnce
    //   // expect(
    //   //   res.json.withArgs({
    //   //     message: 'Internal server error'
    //   //   })
    //   // ).to.be.calledOnce
    // ]);
  });
});
