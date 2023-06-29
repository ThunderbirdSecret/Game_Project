import { Router, ErrorRequestHandler, RequestHandler } from 'express';


export const router: Router = Router();


const middlewares: Array<RequestHandler | ErrorRequestHandler> = [];

export function appRoutes(router: Router) {
  router.get(  [
    '/',
    '/game',
    '/forum',
    '/leaderboard',
    '/profile',
    '/auth',
    '/register',
    '/not-found',
    '/documentation',
        '/*'], middlewares);
}

appRoutes(router);


appRoutes(router);
