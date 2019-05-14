import { BaseError } from './BaseError'

export class InternalServerError extends BaseError {
    constructor(message: string) {
        console.log(7)
        super(message, 105, InternalServerError.name);
    }
}