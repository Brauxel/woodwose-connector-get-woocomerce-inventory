import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import { logAndThrowError } from '../logger/loggerHelpers'

export const createWooCommerceApi = (
  url = process.env.WORDPRESS_URL as string,
  consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY as string,
  consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET as string
) => {
  try {
    return new WooCommerceRestApi({
      url,
      consumerKey,
      consumerSecret,
      version: 'wc/v3',
    })
  } catch (error) {
    return logAndThrowError('Could not create Woo Commerce Api', error as Error)
  }
}
