import { getWooCommerceProducts } from '../../utils/woocommerce/getProductData'

export const getWooCommerceInventory = async () => {
  const wooCommerceProducts = await getWooCommerceProducts()
  return wooCommerceProducts
}
