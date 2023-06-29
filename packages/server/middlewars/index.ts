import type { RequestHandler } from 'express';
import cookieParserMiddleware from 'cookie-parser';
export { auth } from './auth';

export const cookieParser: RequestHandler = cookieParserMiddleware();
