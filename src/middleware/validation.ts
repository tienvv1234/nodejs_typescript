import { Validator, ValidationError } from 'class-validator';
import { deserialize } from 'json-typescript-mapper';
import * as express from 'express';
import { ValidationRouterError } from '../errors/ValidationRouterError';

export function validation<T>(type: any): express.RequestHandler {
    debugger
    let validator = new Validator();
    return (req, res, next) => {
        let input = deserialize(type, req.body);
        let errors = validator.validateSync(input);
        if (errors.length > 0) {
            const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
            next(new ValidationRouterError(message));
        } else {
            req.body = input;
            next();
        }
    }

}