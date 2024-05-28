import { Request, Response } from 'express';
import { config } from '../../utils/constants';
import axios from 'axios';
import { ItemsProps, ProductsFoundProps } from '../../types/products.type';
import { formatProductsItems } from '../../utils/formatProductsItems';
import { SingleProductProps } from '../../types/singleProduct.type';

const { API_URL } = config;
const getItems = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    const itemsFound: ProductsFoundProps = await axios
      .get(`${API_URL}/sites/MLA/search?q=${q}`)
      .then((res) => res.data);

    const formattedItems = formatProductsItems(itemsFound.results);

    const categories = itemsFound?.available_filters
      // const categories = itemsFound?.filters
      ?.find((item) => item.id === 'category')
      ?.values?.map((item) => item.name);

    console.log('==============================');
    console.log(itemsFound?.available_filters);
    console.log('==============================');

    const finalsResults = {
      author: {
        name: 'Mario',
        lastname: 'Martinez',
      },
      categories: categories ?? [],
      items: formattedItems,
    };
    res.send(finalsResults);
  } catch (error) {
    console.log(error);
  }
};
const getItemsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const itemFound: SingleProductProps = await axios
      .get(`${API_URL}/items/${id}`)
      .then((res) => res.data);
    const itemDescription = await axios
      .get(`${API_URL}/items/${id}/description`)
      .then((res) => res.data);

    const item = {
      author: {
        name: 'Mario',
        lastname: 'Martinez',
      },
      id: itemFound.id,
      title: itemFound.title,
      price: {
        currency: itemFound.currency_id,
        amount: itemFound.price,
        decimals: 2,
      },
      picture: itemFound.thumbnail,
      condition: itemFound.condition,
      free_shipping: itemFound.shipping.free_shipping,
      sold_quantity: itemFound.initial_quantity,
      description: itemDescription.plain_text,
    };

    console.log('==============================');
    console.log(itemFound);
    console.log(itemDescription);
    console.log('==============================');
    res.send(item);
  } catch (error) {
    console.log(error);
  }
};

export { getItems, getItemsById };
