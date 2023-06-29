import { Router } from 'express';
import { ForumController } from './forumController';
import { userController } from './userController';

// export const router: Router = Router();


export const forumRouter = (apiRouter: Router) => {
  const service = new ForumController();

  const router: Router = Router();

  router.get('/topic/:id', service.getTopic);
  router.get('/topic', service.getAllTopics);
  router.post('/topic', service.createTopic);
  router.delete('/topic/:id', service.deleteTopic);

  router.get('/comment/:id', service.getComment);
  router.get('/comment', service.getAllCommentsForTopic);
  router.post('/comment', service.createComment);
  router.delete('/comment/:id', service.deleteComment);

  router.post('/reaction', service.createReaction);
  router.get('/reaction', service.getReactions);

  apiRouter.use('/forum', router);
};

export const userRouter = (apiRouter: Router) => {
    const service = new userController();
  
    const router: Router = Router();
    
    router.post('/:id', service.findOrCreate);
  
    apiRouter.use('/user', router);
  };
  // TODO: отдельный контроллер для темы + router.post
// TODO: Раскидаться с редиректами
