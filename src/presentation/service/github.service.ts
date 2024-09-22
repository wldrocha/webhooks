import { GithubIssuePayload, GithubStartPayload } from '../../interfaces'

export class GithubService {
  constructor() {}

  onStar(payload: GithubStartPayload) {
    const { sender, repository, starred_at } = payload

    return `User ${sender.login} starred the repository ${repository.full_name} at ${starred_at}`
  }

  onIssue(payload: GithubIssuePayload) {
    const { action, sender, repository } = payload

    if (action === 'opened') {
      return `User ${sender.login} opened an issue on ${repository.full_name}`
    }

    if (action === 'close') {
      return `User ${sender.login} closed an issue on ${repository.full_name}`
    }

    if (action === 'reopened') {
      return `User ${sender.login} reopened an issue on ${repository.full_name}`
    }

    return `Unhandled action for the issue action: ${action}`
  }
}
