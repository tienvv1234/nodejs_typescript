import * as express from 'express';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ValidationRouterError } from '../errors/ValidationRouterError';

export function validation<T>(type: any): express.RequestHandler {
    debugger;
    return (req, res, next) => {
        console.log(1)
        validate(plainToClass(type, req.body)).then((error: ValidationError[]) => {
            console.log(2)
            if (error.length > 0) {
                console.log(3)
                const message = error.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
                console.log('message', message);
                next(new ValidationRouterError(message));
            } else {
                console.log(4)
                next();
            }
        });
    };
}