import { logger } from '../service/logger';
import { ValidationRouterError } from './ValidationRouterError';

export function errorHandler(error: any, req: any, res: any, next: any) {
  if (error instanceof ValidationRouterError) {
    logger.error(error.message);
    return res.status(400).json(error);
  }

  logger.error(error);
  return res.status(500).json(error);
}
