import { logger } from '../../logger/buildLogger'
import { getWooCommerceProducts } from '../wooCommerceApi'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

describe('getWooCommerceProducts', () => {
  describe('Success', () => {
    it('should call the get products endpoint', async () => {
      const spy = jest
        .spyOn(WooCommerceRestApi.prototype, 'get')
        .mockResolvedValue(['Products are returned here'])
      await getWooCommerceProducts()
      expect(spy).toHaveBeenCalledWith('products')
    })
  })

  describe('Error', () => {
    it('should log an error', async () => {
      const spy = jest.spyOn(logger, 'error').mockImplementation()

      try {
        jest
          .spyOn(WooCommerceRestApi.prototype, 'get')
          .mockRejectedValueOnce('Error')
        await getWooCommerceProducts()
      } catch (error) {
        expect(spy).toHaveBeenCalled()
      }
    })
  })
})
