export interface ProductsProps {
  author: AuthorProps;
  categories?: string[];
  items: ItemProps[];
}

export interface ProductProps {
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
