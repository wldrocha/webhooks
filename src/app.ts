import express from 'express'
import { envs } from './config'
import { GithubController } from './presentation/github/controller'
import { GithubService } from './presentation/service/github.service'
import { GithubSha256Middleware } from './presentation/middlewares/github-sha256.middleware'

;(() => {
  main()
})()

function main() {
  const app = express()
  app.use(express.json())
  const githubService = new GithubService()
  const controller = new GithubController(githubService)

  app.use(GithubSha256Middleware.verifySignature)
  app.post('/api/github', controller.webhookHandler)

  app.listen(envs.PORT, () => {
    console.log(`App runnig on port ${envs.PORT}`)
  })
}
