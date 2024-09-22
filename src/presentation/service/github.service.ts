import { GithubStartPayload } from '../../interfaces'

export class GithubService {
  constructor() {}

  onStar(payload: GithubStartPayload) {
    const { sender, repository, starred_at } = payload

    return `User ${sender.login} starred the repository ${repository.full_name} at ${starred_at}`
  }
}
