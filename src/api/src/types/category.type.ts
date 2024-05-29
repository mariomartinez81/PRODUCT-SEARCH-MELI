export interface CategoryProps {
  attributable: boolean;
  attribute_types: string;
  channels_settings: ChannelsSetting[];
  children_categories: any[];
  date_created: Date;
  id: string;
  meta_categ_id: null;
  name: string;
  path_from_root: PathFromRoot[];
  permalink: null;
  picture: null;
  settings: RootObjectSettings;
  total_items_in_this_category: number;
}

export interface ChannelsSetting {
  channel: string;
  settings: ChannelsSettingSettings;
}

export interface ChannelsSettingSettings {
  buying_modes?: string[];
  immediate_payment?: string;
  minimum_price?: number;
  status?: string;
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface RootObjectSettings {
  adult_content: boolean;
  buyer_protection_programs: string[];
  buying_allowed: boolean;
  buying_modes: string[];
  catalog_domain: string;
  coverage_areas: string;
  currencies: string[];
  fragile: boolean;
  immediate_payment: string;
  item_conditions: string[];
  items_reviews_allowed: boolean;
  listing_allowed: boolean;
  max_description_length: number;
  max_pictures_per_item: number;
  max_pictures_per_item_var: number;
  max_sub_title_length: number;
  max_title_length: number;
  max_variations_allowed: number;
  maximum_price: null;
  maximum_price_currency: string;
  minimum_price: number;
  minimum_price_currency: string;
  mirror_category: string;
  mirror_master_category: null;
  mirror_slave_categories: string[];
  price: string;
  reservation_allowed: string;
  restrictions: any[];
  rounded_address: boolean;
  seller_contact: string;
  shipping_options: string[];
  shipping_profile: string;
  show_contact_information: boolean;
  simple_shipping: string;
  status: string;
  stock: string;
  sub_vertical: string;
  subscribable: boolean;
  tags: any[];
  vertical: string;
  vip_subdomain: string;
}
