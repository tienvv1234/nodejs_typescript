import { BaseError } from './BaseError';

export class ValidationRouterError extends BaseError {
    constructor(message: string) {
        super(message, 109, ValidationRouterError.name);
    }
}