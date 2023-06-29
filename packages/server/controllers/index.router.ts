import { Router } from 'express';
import { forumRouter, userRouter } from './router';

export const apiRouter: Router = Router();

forumRouter(apiRouter);
userRouter(apiRouter);
