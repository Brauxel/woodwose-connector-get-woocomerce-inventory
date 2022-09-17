import { hydrateEnv } from '../../hydrators/secrets'
import { logger } from '../../logger/buildLogger'
import { createWooCommerceApi } from '../createWooCommerceApi'

describe('WooCommerce Utils - createWooCommerceApi', () => {
  beforeAll(() => {
    jest.spyOn(logger, 'error').mockImplementation()
    jest.spyOn(logger, 'warn').mockImplementation()
    jest.spyOn(logger, 'info').mockImplementation()
  })
  afterAll(() => {
    jest.clearAllMocks()
  })

  describe('Error', () => {
    it('should return error if ENV values are not provided', () => {
      expect(() => {
        createWooCommerceApi()
      }).toThrowError('Could not create Woo Commerce Api')
    })
  })

  describe('Success', () => {
    beforeAll(async () => {
      await hydrateEnv()
    })

    afterAll(() => {
      jest.clearAllMocks()
    })

    it('should create a WooCommerce API Object with custom values', () => {
      const WooCommerce = createWooCommerceApi(
        'https://test-url.com',
        'test consumer key',
        'test consumer secret'
      )

      expect(WooCommerce).toMatchObject({
        url: 'https://test-url.com',
        consumerKey: 'test consumer key',
        consumerSecret: 'test consumer secret',
      })
    })

    it('should create a WooCommerce API with default values in the ENV file when no custom arguments are provided', () => {
      const WooCommerce = createWooCommerceApi()

      expect(WooCommerce).toMatchObject({
        classVersion: '1.0.1',
        url: 'https://woodwose.in',
        wpAPIPrefix: 'wp-json',
        version: 'wc/v3',
        isHttps: true,
        encoding: 'utf8',
        queryStringAuth: false,
        port: '',
        timeout: undefined,
        axiosConfig: {},
      })

      expect(WooCommerce.consumerKey).toBeDefined()
      expect(WooCommerce.consumerSecret).toBeDefined()
    })
  })
})
