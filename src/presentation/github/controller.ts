import { Request, Response } from 'express'

export class GithubController {
  constructor() {}

  webhookHandler = (req: Request, res: Response) => {
   
    res.status(201).send('Accepeted')
  }
}
