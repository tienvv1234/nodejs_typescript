import { InternalServerError } from "./InternalServerError";
import { logger } from "../service/logger";

export function errorHandler(error: any, req: any, res: any, next: any): void {
    logger.error(error.message);
    return res.status(500).send(new InternalServerError(error.message))
}