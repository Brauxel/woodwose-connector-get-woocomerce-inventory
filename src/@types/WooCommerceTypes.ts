interface MetaDatum {
  id: number
  key: string
  value: string
}

interface Attribute {
  id: number
  name: string
  option: string
}

interface Up {
  href: string
}

interface Self {
  href: string
}

interface Collection {
  href: string
}

interface Links {
  self: Self[]
  collection: Collection[]
  up: Up[]
}

interface Image {
  id: number
  date_created: Date
  date_created_gmt: Date
  date_modified: Date
  date_modified_gmt: Date
  src: string
  name: string
  alt: string
  position?: number
}

interface Category {
  id: number
  name: string
  slug: string
  parent: number
  description: string
  display: string
  image: Image
  menu_order: number
  count: number
  _links: Links
}

interface Dimensions {
  length: string
  width: string
  height: string
}

export interface Product {
  id: number
  name: string
  slug: string
  permalink: string
  date_created: Date
  date_created_gmt: Date
  date_modified: Date
  date_modified_gmt: Date
  type: 'simple' | 'variable' | 'grouped'
  status: string
  featured: boolean
  catalog_visibility: string
  description: string
  short_description: string
  sku: string
  price: string
  regular_price: string
  sale_price: string
  date_on_sale_from: null
  date_on_sale_from_gmt: null
  date_on_sale_to: null
  date_on_sale_to_gmt: null
  price_html: string
  on_sale: boolean
  purchasable: boolean
  total_sales: number
  virtual: boolean
  downloadable: boolean
  downloads: any[]
  download_limit: number
  download_expiry: number
  external_url: string
  button_text: string
  tax_status: string
  tax_class: string
  manage_stock: boolean
  stock_quantity: number
  in_stock: boolean
  backorders: string
  backorders_allowed: boolean
  backordered: boolean
  sold_individually: boolean
  weight: string
  dimensions: Dimensions
  shipping_required: boolean
  shipping_taxable: boolean
  shipping_class: string
  shipping_class_id: number
  reviews_allowed: boolean
  average_rating: string
  rating_count: number
  related_ids: number[]
  upsell_ids: number[]
  cross_sell_ids: number[]
  parent_id: number
  purchase_note: string
  categories: Partial<Category>[]
  tags: any[]
  images: Image[]
  attributes: Attribute[]
  default_attributes: any[]
  variations: number[]
  grouped_products: any[]
  menu_order: number
  meta_data: MetaDatum[]
  _links: Links
}

export interface ProductVariation {
  id: number
  permalink: string
  date_created: Date
  date_created_gmt: Date
  date_modified: Date
  date_modified_gmt: Date
  status: string
  description: string
  sku: string
  price: string
  regular_price: string
  sale_price: string
  date_on_sale_from: null
  date_on_sale_from_gmt: null
  date_on_sale_to: null
  date_on_sale_to_gmt: null
  on_sale: boolean
  purchasable: boolean
  virtual: boolean
  downloadable: boolean
  downloads: any[]
  download_limit: number
  download_expiry: number
  tax_status: string
  tax_class: string
  manage_stock: boolean
  stock_quantity: number
  backorders: string
  backorders_allowed: boolean
  backordered: boolean
  weight: string
  dimensions: Dimensions
  shipping_class: string
  shipping_class_id: number
  image: Image
  attributes: Attribute[]
  menu_order: number
  meta_data: MetaDatum[]
  _links: Links
}
