import { logAndThrowError } from '../../utils/logger/loggerHelpers'
import {
  extractDataFromVariations,
  getWooCommerceData,
} from '../../utils/woocommerce/wooCommerceApi'

export const fetchAndCreateWooCommerceData = async () => {
  try {
    const wooCommerceProducts = await getWooCommerceData('products')

    const sanitizedData = []
    for (const product of wooCommerceProducts) {
      const variations = await getWooCommerceData(
        `products/${product.id}/variations`
      )

      sanitizedData.push({
        id: product.id,
        name: product.name,
        variations: extractDataFromVariations(variations),
      })
    }

    return sanitizedData
  } catch (error) {
    return logAndThrowError(
      'Error while fetching and creating WooCommerce data',
      error as Error
    )
  }
}
