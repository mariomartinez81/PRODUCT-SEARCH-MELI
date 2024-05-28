export interface SingleProductProps {
  accepts_mercadopago: boolean;
  attributes: Attribute[];
  automatic_relist: boolean;
  base_price: number;
  buying_mode: string;
  catalog_listing: boolean;
  catalog_product_id: string;
  category_id: string;
  condition: string;
  coverage_areas: any[];
  currency_id: string;
  date_created: Date;
  deal_ids: string[];
  descriptions: any[];
  domain_id: string;
  health: null;
  id: string;
  initial_quantity: number;
  international_delivery_mode: string;
  last_updated: Date;
  listing_source: string;
  listing_type_id: string;
  location: Location;
  non_mercado_pago_payment_methods: any[];
  official_store_id: null;
  original_price: null;
  parent_item_id: null;
  permalink: string;
  pictures: Picture[];
  price: number;
  sale_terms: SaleTerm[];
  seller_address: SellerAddress;
  seller_contact: null;
  seller_id: number;
  shipping: Shipping;
  site_id: string;
  status: string;
  sub_status: any[];
  tags: string[];
  thumbnail: string;
  thumbnail_id: string;
  title: string;
  variations: any[];
  video_id: null;
  warranty: string;
}

export interface Attribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: null | string;
  value_type: ValueType;
  values: Value[];
}

export enum ValueType {
  Boolean = 'boolean',
  List = 'list',
  Number = 'number',
  NumberUnit = 'number_unit',
  String = 'string',
}

export interface Value {
  id: null | string;
  name: null | string;
  struct: Struct | null;
}

export interface Struct {
  number: number;
  unit: string;
}

export interface Location {}

export interface Picture {
  id: string;
  max_size: string;
  quality: string;
  secure_url: string;
  size: string;
  url: string;
}

export interface SaleTerm {
  id: string;
  name: string;
  value_id: string;
  value_name: string;
  value_struct: null;
  value_type: ValueType;
  values: Value[];
}

export interface SellerAddress {
  city: City;
  country: Country;
  id: number;
  search_location: SearchLocation;
  state: Country;
}

export interface City {
  name: string;
}

export interface Country {
  id: string;
  name: string;
}

export interface SearchLocation {
  city: Country;
  neighborhood: Country;
  state: Country;
}

export interface Shipping {
  dimensions: null;
  free_shipping: boolean;
  local_pick_up: boolean;
  logistic_type: string;
  methods: any[];
  mode: string;
  store_pick_up: boolean;
  tags: string[];
}
