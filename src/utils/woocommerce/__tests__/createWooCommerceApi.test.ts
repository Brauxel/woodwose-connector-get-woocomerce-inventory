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
    const OLD_ENV = process.env

    beforeEach(() => {
      jest.resetModules()
      process.env = { ...OLD_ENV }
    })

    afterEach(() => {
      process.env = OLD_ENV
    })

    it('should return error if ENV URL value is not provided', () => {
      process.env.WORDPRESS_URL = ''
      expect(() => {
        createWooCommerceApi()
      }).toThrowError('Could not create Woo Commerce Api')
    })

    it('should return error if ENV WOOCOMMERCE_CONSUMER_KEY value is not provided', () => {
      process.env.WOOCOMMERCE_CONSUMER_KEY = ''
      expect(() => {
        createWooCommerceApi()
      }).toThrowError('Could not create Woo Commerce Api')
    })

    it('should return error if ENV WOOCOMMERCE_CONSUMER_SECRET value is not provided', () => {
      process.env.WOOCOMMERCE_CONSUMER_SECRET = ''
      expect(() => {
        createWooCommerceApi()
      }).toThrowError('Could not create Woo Commerce Api')
    })
  })

  describe('Success', () => {
    beforeEach(() => {
      jest.resetModules()
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
        url: 'https://wordpressurl.com',
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
