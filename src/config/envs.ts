import 'dotenv/config'
import { get } from 'env-var'

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  SECRET_TOKEN: get('SECRET_TOKEN').required().asString()
}
