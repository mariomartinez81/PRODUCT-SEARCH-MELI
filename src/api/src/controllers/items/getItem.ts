import { Request, Response } from 'express';
import { ProductsFoundProps } from '../../types/products.type';
import { formatProductsItems } from '../../utils/formatProductsItems';
import { SingleProductProps } from '../../types/singleProduct.type';
import {
  getDescriptionItemByIdExternalApi,
  getItemByIdExternalApi,
  getItemsFromExternalApi,
} from '../../utils/helpers';
import { author } from '../../utils/constants';

const getItems = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    const itemsFound: ProductsFoundProps = await getItemsFromExternalApi(
      `${q}`,
    );

    const formattedItems = formatProductsItems(itemsFound.results);

    const categories = itemsFound?.filters
      .find((item) => item.id === 'category')
      ?.values.flatMap((category) =>
        category.path_from_root.map((category) => category.name),
      );

    const finalsResults = {
      author,
      categories: categories ?? [],
      items: formattedItems,
    };
    res.status(200).json(finalsResults);
  } catch (error) {
    console.log(error);
    res.status(500).json({ author, message: 'Internal server error' });
  }
};

const getItemsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const itemFound: SingleProductProps = await getItemByIdExternalApi(id);
    const itemDescription = await getDescriptionItemByIdExternalApi(id);

    const item = {
      author,
      item: {
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
      },
    };
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ author, message: 'Internal server error' });
  }
};

export { getItems, getItemsById };
