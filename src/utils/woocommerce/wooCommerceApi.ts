import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import { Product } from '../../@types/WooCommerceTypes'
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

export const getWooCommerceData = async (
  endPoint: string
): Promise<Product[]> => {
  const WooCommerce = createWooCommerceApi()

  return WooCommerce.get(endPoint)
    .then((response) => response.data)
    .catch((error) => {
      logAndThrowError('The GET call returned an error', error)
    })
}

export const extractDataFromVariations = (variations: Product[]) =>
  variations.map(
    ({ id, sku, price, stock_quantity, permalink, attributes }) => ({
      id,
      sku,
      price,
      size: attributes.find(({ name }) => name.toLowerCase() === 'size')
        ?.option,
      quantity: stock_quantity,
      permalink,
    })
  )
