import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
import {
  Attribute,
  Product,
  ProductVariation,
} from '../../@types/WooCommerceTypes'
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

export const getWooCommerceProducts = async (): Promise<Product[]> => {
  const WooCommerce = createWooCommerceApi()

  return WooCommerce.get('products')
    .then((response) => response.data)
    .catch((error) => {
      logAndThrowError('The product GET call returned an error', error)
    })
}

export const getWooCommerceProductVariations = async (
  id: number
): Promise<ProductVariation[]> => {
  const WooCommerce = createWooCommerceApi()

  return WooCommerce.get(`products/${id}/variations`)
    .then((response) => response.data)
    .catch((error) => {
      logAndThrowError(
        'The product variations GET call returned an error',
        error
      )
    })
}

export const extractAttributeOption = (
  attributes: Attribute[],
  identifier: string
) => attributes.find(({ name }) => name.toLowerCase() == identifier)?.option

export const extractDataFromVariations = (variations: ProductVariation[]) =>
  variations.map(
    ({
      id,
      sku,
      price,
      stock_quantity,
      permalink,
      attributes,
      date_created_gmt,
      date_modified_gmt,
    }) => ({
      id,
      sku,
      price,
      size: extractAttributeOption(attributes, 'size'),
      quantity: stock_quantity,
      permalink,
      date_created_gmt,
      date_modified_gmt,
    })
  )
