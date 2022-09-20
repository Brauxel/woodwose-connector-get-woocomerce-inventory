import { logger } from '../../logger/buildLogger'
import { getWooCommerceProductVariations } from '../wooCommerceApi'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

describe('getWooCommerceProductVariations', () => {
  beforeAll(() => {
    jest.spyOn(logger, 'error').mockImplementation()
    jest.spyOn(logger, 'warn').mockImplementation()
    jest.spyOn(logger, 'info').mockImplementation()
  })
  afterAll(() => {
    jest.clearAllMocks()
  })

  describe('Success', () => {
    it('should call the get products variations endpoint', async () => {
      const spy = jest
        .spyOn(WooCommerceRestApi.prototype, 'get')
        .mockResolvedValue(['Product variations are returned here'])
      await getWooCommerceProductVariations(5)
      expect(spy).toHaveBeenCalledWith('products/5/variations')
    })
  })

  describe('Error', () => {
    it('should log an error', async () => {
      const spy = jest.spyOn(logger, 'error').mockImplementation()

      try {
        jest
          .spyOn(WooCommerceRestApi.prototype, 'get')
          .mockRejectedValueOnce('Error')
        await getWooCommerceProductVariations(5)
      } catch (error) {
        expect(spy).toHaveBeenCalled()
      }
    })
  })
})
