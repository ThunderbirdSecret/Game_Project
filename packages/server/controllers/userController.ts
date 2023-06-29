import { userCrud } from '../db';
import type { Request, Response } from 'express';

export class userController {
  findOrCreate = (_req: Request, res: Response) => {
    userCrud
      .findOrCreate(_req.params.id, { ..._req.body })
      .then(user => res.status(200).json(user))
      .catch(err =>
        res
          .status(500)
          .json({ error: ['db error: unable to find or create user', err] })
      );
  };
  setTheme = (_req: Request, res: Response) => {
    userCrud
      .update(_req.body.id, { theme: _req.body.theme })
      .then(() => res.status(200).json('ok'))
      .catch(err =>
        res.status(500).json({ error: ['db error: unable to set theme', err] })
      );
  };
}
