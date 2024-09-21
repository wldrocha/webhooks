import { Request, Response } from 'express'

export class GithubController {
  constructor() {}

  webhookHandler = (req: Request, res: Response) => {
    const gihubEvent = req.headers['x-github-event'] ?? 'unknown'
    
    const payload = req.body

    
    res.status(201).send('Accepeted')
  }
}
