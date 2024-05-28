export interface ProductsFoundProps {
  available_filters: AvailableFilter[];
  available_sorts: Sort[];
  country_default_time_zone: string;
  filters: Filter[];
  paging: Paging;
  pdp_tracking: PDPTracking;
  query: string;
  results: ResultProps[];
  site_id: SiteID;
  sort: Sort;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}

export interface FilterValue {
  id: string;
  name: string;
  path_from_root: Sort[];
}

export interface Paging {
  limit: number;
  offset: number;
  primary_results: number;
  total: number;
}

export interface PDPTracking {
  group: boolean;
  product_info: ProductInfo[];
}

export interface ProductInfo {
  id: string;
  score: number;
  status: Status;
}

export enum Status {
  Shown = 'shown',
}

export interface ResultProps {
  accepts_mercadopago: boolean;
  attributes: ResultAttribute[];
  available_quantity: number;
  buying_mode: BuyingMode;
  catalog_listing: boolean;
  catalog_product_id: null | string;
  category_id: CategoryID;
  condition: Condition;
  currency_id: CurrencyID;
  differential_pricing?: DifferentialPricing;
  discounts: null;
  domain_id: DomainID;
  id: string;
  installments: Installments;
  inventory_id: null | string;
  listing_type_id: ListingTypeID;
  official_store_id: number | null;
  official_store_name?: string;
  order_backend: number;
  original_price: number | null;
  permalink: string;
  price: number;
  promotions: any[];
  sale_price: null;
  seller: Seller;
  shipping: Shipping;
  site_id: SiteID;
  stop_time: Date;
  thumbnail: string;
  thumbnail_id: string;
  title: string;
  use_thumbnail_id: boolean;
  variation_filters?: string[];
  variations_data?: { [key: string]: VariationsDatum };
  winner_item_id: null;
}

export interface ResultAttribute {
  attribute_group_id: AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  id: string;
  name: string;
  source: number;
  value_id: null | string;
  value_name: null | string;
  value_struct: Struct | null;
  value_type: ValueType;
  values: AttributeValue[];
}

export enum AttributeGroupID {
  Others = 'OTHERS',
}

export enum AttributeGroupName {
  Otros = 'Otros',
}

export interface Struct {
  number: number;
  unit: Unit;
}

export enum Unit {
  CM = 'cm',
  G = 'g',
  Kg = 'kg',
  Mm = 'mm',
}

export enum ValueType {
  Boolean = 'boolean',
  List = 'list',
  NumberUnit = 'number_unit',
  String = 'string',
}

export interface AttributeValue {
  id: null | string;
  name: null | string;
  source: number;
  struct: Struct | null;
}

export enum BuyingMode {
  BuyItNow = 'buy_it_now',
}

export enum CategoryID {
  Mla1442 = 'MLA1442',
  Mla352679 = 'MLA352679',
  Mla414225 = 'MLA414225',
}

export enum Condition {
  New = 'new',
}

export enum CurrencyID {
  Ars = 'ARS',
}

export interface DifferentialPricing {
  id: number;
}

export enum DomainID {
  MlaSmartwatches = 'MLA-SMARTWATCHES',
  MlaWristwatches = 'MLA-WRISTWATCHES',
}

export interface Installments {
  amount: number;
  currency_id: CurrencyID;
  quantity: number;
  rate: number;
}

export enum ListingTypeID {
  GoldPro = 'gold_pro',
  GoldSpecial = 'gold_special',
}

export interface Seller {
  id: number;
  nickname: string;
}

export interface Shipping {
  benefits: null;
  free_shipping: boolean;
  logistic_type: LogisticType;
  mode: Mode;
  promise: null;
  shipping_score: number;
  store_pick_up: boolean;
  tags: Tag[];
}

export enum LogisticType {
  CrossDocking = 'cross_docking',
  Fulfillment = 'fulfillment',
  XdDropOff = 'xd_drop_off',
}

export enum Mode {
  Me2 = 'me2',
}

export enum Tag {
  Fulfillment = 'fulfillment',
  MLACHGThresholdEne24 = 'MLA-CHG-threshold-ene-24',
  MLACHGThresholdNov23 = 'MLA-CHG-threshold-nov-23',
  MLAChgThresholdAgo22 = 'MLA-chg-threshold-ago-22',
  MLAChgThresholdFeb22 = 'MLA-chg-threshold-feb-22',
  MLAChgThresholdFeb23 = 'MLA-chg-threshold-Feb-23',
  MandatoryFreeShipping = 'mandatory_free_shipping',
  MlaChThresholdAgo2023 = 'MLA-CH-THRESHOLD-AGO-2023',
  SelfServiceIn = 'self_service_in',
  SelfServiceOut = 'self_service_out',
}

export enum SiteID {
  Mla = 'MLA',
}

export interface VariationsDatum {
  attributes: VariationsDatumAttribute[];
  inventory_id?: string;
  name: string;
  pictures_qty: number;
  price: number;
  ratio: string;
  thumbnail: string;
  user_product_id: string;
}

export interface VariationsDatumAttribute {
  id: ID;
  name: Name;
  value_name: null | string;
  value_type: ValueType;
}

export enum ID {
  Gtin = 'GTIN',
}

export enum Name {
  CódigoUniversalDeProducto = 'Código universal de producto',
}

// TYPES RESPONSE GETITEMS
export interface ItemsProps {
  author: AuthorProps;
  categories?: string[];
  item: ItemProps;
}

export interface AuthorProps {
  name?: string;
  lastname?: string;
}

export interface ItemProps {
  id?: string;
  title?: string;
  price?: PriceProps;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
  sold_quantity?: number;
  description?: string;
}

export interface PriceProps {
  currency: string;
  amount: number;
  decimals: number;
}
