import { fetchAndCreateWooCommerceData } from './resources/get-inventory'
// import { hydrateEnv } from './utils/hydrators/secrets'

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err)
  process.exit(1) //mandatory (as per the Node.js docs)
})

export const handler = async () => {
  // await hydrateEnv()
  const data = await fetchAndCreateWooCommerceData()
  return {
    statusCode: 200,
    body: JSON.stringify({
      data,
    }),
  }
}
