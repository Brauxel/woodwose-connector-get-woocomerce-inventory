import { fetchAndCreateWooCommerceData } from './resources/get-inventory'
import { APIGatewayProxyResult } from 'aws-lambda'
import { hydrateEnv } from './utils/hydrators/secrets'

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err)
  process.exit(1) //mandatory (as per the Node.js docs)
})

hydrateEnv()
export const handler = async (): Promise<APIGatewayProxyResult> => {
  const data = await fetchAndCreateWooCommerceData()
  return {
    statusCode: 200,
    body: JSON.stringify({
      data,
    }),
  }
}

// If we're developing on our local machine, we run the handler function to develop on our local machine
if (process.env.NODE_ENV === 'local') {
  handler()
}
