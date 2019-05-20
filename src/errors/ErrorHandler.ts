import { InternalServerError } from './InternalServerError';
import { logger } from '../service/logger';
import { ValidationRouterError } from './ValidationRouterError';

export function errorHandler(error: any, req: any, res: any, next: any) {
  if (error instanceof ValidationRouterError) {
    logger.error(error.message);
    return res.status(400).json(new ValidationRouterError(error.message));
  }

  logger.error(error);
  return res.status(500).json(new InternalServerError(error.message));
}
