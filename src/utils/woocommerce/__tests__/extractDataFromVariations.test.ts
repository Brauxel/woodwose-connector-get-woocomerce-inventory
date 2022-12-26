import { productVariationsMockData } from '../../../mocks/wooCommerce/ProductData'
import {
  extractAttributeOption,
  extractDataFromVariations,
} from '../wooCommerceApi'

describe('extractDataFromVariations', () => {
  it('should extract the id, size, sku, price, quantity and permalink', () => {
    expect(extractDataFromVariations(productVariationsMockData)).toStrictEqual([
      {
        id: 5019,
        sku: 'BAMTSDG02--XL',
        price: '899',
        size: 'XL',
        quantity: 2,
        date_created_gmt: '2022-11-23T05:47:06',
        date_modified_gmt: '2022-11-23T05:47:06',
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=xl',
      },
      {
        id: 5018,
        sku: 'BAMTSDG02--L',
        price: '899',
        size: 'L',
        quantity: 1,
        date_created_gmt: '2022-11-23T05:47:06',
        date_modified_gmt: '2022-11-23T05:47:06',
        permalink:
          'https://woodwose.in/product/mens-bamboo-dark-grey-t-shirt/?attribute_pa_size=l',
      },
    ])
  })
})

describe('extractAttributeOption', () => {
  it('should return the option stored in the matching attribute', () => {
    expect(
      extractAttributeOption(
        [
          {
            id: 1,
            name: 'Size',
            option: 'XL',
          },
        ],
        'size'
      )
    ).toBe('XL')
  })

  it('should not return an option if no matching attribute', () => {
    expect(
      extractAttributeOption(
        [
          {
            id: 1,
            name: 'not a match',
            option: 'XL',
          },
        ],
        'size'
      )
    ).toBe(undefined)
  })
})
