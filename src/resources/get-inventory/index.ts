import { getWooCommerceData } from '../../utils/woocommerce/wooCommerceApi'

export const getWooCommerceInventory = async () => {
  const wooCommerceProducts = await getWooCommerceData('products')
  return wooCommerceProducts
}
