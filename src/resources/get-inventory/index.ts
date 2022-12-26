import { ProductVariation } from '../../@types/WooCommerceTypes'
import { logAndThrowError } from '../../utils/logger/loggerHelpers'
import {
  extractDataFromVariations,
  getWooCommerceProducts,
  getWooCommerceProductVariations,
} from '../../utils/woocommerce/wooCommerceApi'

export const fetchAndCreateWooCommerceData = async () => {
  try {
    const wooCommerceProducts = await getWooCommerceProducts()

    const sanitizedData = []
    for (const product of wooCommerceProducts) {
      const variations = await getWooCommerceProductVariations(product.id)

      sanitizedData.push({
        id: product.id,
        name: product.name,
        slug: product.slug,
        variations: extractDataFromVariations(variations as ProductVariation[]),
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
