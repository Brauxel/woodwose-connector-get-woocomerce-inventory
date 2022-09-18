import { logAndThrowError } from '../logger/loggerHelpers'
import { createWooCommerceApi } from './createWooCommerceApi'

export const getWooCommerceProducts = () => {
  const WooCommerce = createWooCommerceApi()

  return WooCommerce.get('products')
    .then((response) => response.data)
    .catch((error) => {
      logAndThrowError('The GET /products call returned an error', error)
    })
}
