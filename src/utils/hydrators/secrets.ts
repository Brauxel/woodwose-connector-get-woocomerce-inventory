import dotenv from 'dotenv'
import fs from 'fs'
import { logAndThrowError } from '../logger/loggerHelpers'

export const hydrateEnv = async () => {
  if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' })
  }

  if (!process.env.PORT) {
    logAndThrowError('Please provide PORT in environment variables', {
      name: 'Missing env variables',
      message: 'Please provide PORT in environment variables',
    })
  }

  if (!process.env.WORDPRESS_URL) {
    logAndThrowError('Please provide WORDPRESS_URL in environment variables', {
      name: 'Missing env variables',
      message: 'Please provide WORDPRESS_URL in environment variables',
    })
  }

  if (!process.env.WOOCOMMERCE_CONSUMER_KEY) {
    logAndThrowError(
      'Please provide WOOCOMMERCE_CONSUMER_KEY in environment variables',
      {
        name: 'Missing env variables',
        message:
          'Please provide WOOCOMMERCE_CONSUMER_KEY in environment variables',
      }
    )
  }

  if (!process.env.WOOCOMMERCE_CONSUMER_SECRET) {
    logAndThrowError(
      'Please provide WOOCOMMERCE_CONSUMER_SECRET in environment variables',
      {
        name: 'Missing env variables',
        message:
          'Please provide WOOCOMMERCE_CONSUMER_SECRET in environment variables',
      }
    )
  }
}
