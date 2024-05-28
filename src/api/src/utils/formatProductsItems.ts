import { ResultProps } from '../types/products.type';

const formatProductsItems = (productItems: ResultProps[]) =>
  productItems?.map((product) => ({
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency_id,
      amount: product.price,
      decimals: 0,
    },
    picture: product.thumbnail,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
  }));

export { formatProductsItems };
