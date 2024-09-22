import { Request, Response } from 'express'
import { GithubService } from '../service/github.service'

export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  webhookHandler = (req: Request, res: Response) => {
    const gihubEvent = req.headers['x-github-event'] ?? 'unknown'

    let message = ''

    const payload = req.body

    switch (gihubEvent) {
      case 'star':
        message = this.githubService.onStar(payload)
        break
      default:
        console.log(`unknown event: ${gihubEvent}`)
        break
    }
    console.log('🚀 ~ GithubController ~ message:', message)

    res.status(201).send('Accepeted')
  }
}
