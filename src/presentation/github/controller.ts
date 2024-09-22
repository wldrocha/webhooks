import { Request, Response } from 'express'
import { GithubService } from '../service/github.service'

export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  webhookHandler = (req: Request, res: Response) => {
    const githubEvent = req.headers['x-github-event'] ?? 'unknown'

    let message = ''

    const payload = req.body

    switch (githubEvent) {
      case 'star':
        message = this.githubService.onStar(payload)
        break

      case 'issues':
        message = this.githubService.onIssue(payload)
        break
      default:
        console.log(`unknown event: ${githubEvent}`)
        break
    }
    console.log('🚀 ~ GithubController ~ message:', message)

    res.status(201).send('Accepeted')
  }
}
