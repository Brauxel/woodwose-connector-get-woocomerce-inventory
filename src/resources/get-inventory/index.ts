import { getWooCommerceData } from '../../utils/woocommerce/wooCommerceApi'

export const getWooCommerceInventory = async () => {
  const wooCommerceProducts = await getWooCommerceData('products')

  const promises = wooCommerceProducts.map(({ id }) =>
    getWooCommerceData(`products/${id}/variations`)
  )
  Promise.all(promises).then((result) => result)

  return Promise.all(promises).then((result) => result)
}
