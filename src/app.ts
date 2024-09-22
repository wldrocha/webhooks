import express from 'express'
import { envs } from './config'
import { GithubController } from './presentation/github/controller'
import { GithubService } from './presentation/service/github.service'
;(() => {
  main()
})()

function main() {
  const app = express()
  app.use(express.json())
  const githubService = new GithubService()
  const controller = new GithubController(githubService)

  app.post('/api/github', controller.webhookHandler)
  app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.listen(envs.PORT, () => {
    console.log(`App runnig on port ${envs.PORT}`)
  })
}
