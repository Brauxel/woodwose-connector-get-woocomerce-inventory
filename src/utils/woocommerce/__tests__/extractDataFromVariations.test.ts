import { productVariationsMockData } from '../../../mocks/wooCommerce/ProductData'
import { extractDataFromVariations } from '../wooCommerceApi'

describe('extractDataFromVariations', () => {
  it('should extract the id, size, sku, price, quantity and permalink', () => {
    expect(extractDataFromVariations(productVariationsMockData)).toStrictEqual([
      {
        id: 5019,
        sku: 'BAMTSDG02--XL',
        price: '899',
        size: 'XL',
        quantity: 2,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xl',
      },
      {
        id: 5018,
        sku: 'BAMTSDG02--L',
        price: '899',
        size: 'L',
        quantity: 1,
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=l',
      },
    ])
  })
})
