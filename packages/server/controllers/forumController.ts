import type { Request, Response } from 'express';
import { topicCrud, commentCrud, Reaction, reactionCrud } from '../db';

export class ForumController {
  //Получить все топики
  getAllTopics = (_: Request, res: Response) => {
    topicCrud
      .getAll()
      .then(topics => res.status(200).json(topics))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };
// Получит топик по id
  getTopic = (_req: Request, res: Response) => {
    topicCrud
      .get(_req.params.id)
      .then(topic => res.status(200).json(topic))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };
// Создать топик
  createTopic = (_req: Request, res: Response) => {
    topicCrud
      .create(_req.body)
      .then(topic => res.status(200).json(topic))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };
// Удалить топик
  deleteTopic = (_req: Request, res: Response) => {
    topicCrud
      .delete(_req.params.id)
      .then(() => res.status(200).json('ok'))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };
// Получит все комменты от топика
  getAllCommentsForTopic = (_req: Request, res: Response) => {
    commentCrud
      .findAll({
        include: [Reaction],
        where: {
          id_topic: _req.query.id_topic,
        },
      })
      .then(comments => res.status(200).json(comments))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  getComment = (_req: Request, res: Response) => {
    commentCrud
      .findAll({
        include: [Reaction],
        where: { id: _req.params.id },
      })
      .then(comment => res.status(200).json(comment))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  createComment = (_req: Request, res: Response) => {
    commentCrud
      .create(_req.body)
      .then(comment => res.status(200).json(comment))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  deleteComment = (_req: Request, res: Response) => {
    commentCrud
      .delete(_req.params.id)
      .then(() => res.status(200).json('ok'))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  createReaction = (_req: Request, res: Response) => {
    reactionCrud
      .createOrDestroy(
        {
          id_author: _req.body.id_author,
          id_comment: _req.body.id_comment,
          value: _req.body.value,
        },
        _req.body
      )
      .then(reaction => res.status(200).json(reaction))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };
  getReactions = (_req: Request, res: Response) => {
    reactionCrud
      .getAll()
      .then(reactions => res.status(200).json(reactions))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };
}
