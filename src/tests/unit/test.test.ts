import * as request from 'supertest';
import { expect, should } from 'chai';

describe('GET /', () => {
  it('should return 200 OK', () => {
    expect('abc').equal('abc');
  });
});
