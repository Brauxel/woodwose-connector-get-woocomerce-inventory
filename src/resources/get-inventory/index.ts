import { createWooCommerceApi } from '../../utils/woocommerce/createWooCommerceApi'

export const getWooCommerceInventory = async () => {
  const WooCommerce = createWooCommerceApi()
  console.log('getWooCommerceInventory', WooCommerce)
}
