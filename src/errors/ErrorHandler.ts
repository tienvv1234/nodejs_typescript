import { InternalServerError } from './InternalServerError';
import { logger } from '../service/logger';

export function errorHandler(error: any, req: any, res: any, next: any) {
  debugger;
  console.log(23423423423423423, error)
  logger.error(error);
  return res.status(500).json(new InternalServerError(error.message));
}
