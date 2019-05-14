import { BaseError } from './BaseError';

export class InternalServerError extends BaseError {
  constructor(message: string) {
    super(message, 105, InternalServerError.name);
  }
}
