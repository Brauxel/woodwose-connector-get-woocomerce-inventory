import { createWooCommerceApi } from './utils/woocommerce/createWooCommerceApi'

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err)
  process.exit(1) //mandatory (as per the Node.js docs)
})

createWooCommerceApi()
