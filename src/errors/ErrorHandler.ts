import { InternalServerError } from './InternalServerError';
import { logger } from '../service/logger';

export function errorHandler(error: any, req: any, res: any, next: any) {
  logger.error(error.message);
  return res.status(500).json(new InternalServerError(error.message));
}
