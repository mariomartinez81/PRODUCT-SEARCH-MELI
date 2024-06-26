import { Request, Response } from 'express';
import { ProductsFoundProps } from '../../types/products.type';
import { formatProductsItems } from '../../utils/formatProductsItems';
import { SingleProductProps } from '../../types/singleProduct.type';
import {
  getCategoryById,
  getDescriptionItemByIdExternalApi,
  getItemByIdExternalApi,
  getItemsFromExternalApi,
} from '../../utils/helpers';
import { author, DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../utils/constants';

const getItems = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { q, limit, offset } = req.query;

    let limitNumber;
    let offsetNumber;

    if (limit === undefined) limitNumber = DEFAULT_LIMIT;
    else limitNumber = Number(limit);
    if (offset === undefined) offsetNumber = DEFAULT_OFFSET;
    else offsetNumber = Number(offset);

    const itemsFound: ProductsFoundProps = await getItemsFromExternalApi({
      search: `${q}`,
      limit: limitNumber,
      offset: offsetNumber,
    });

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
    return res.status(200).json(finalsResults);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ author, message: 'Internal server error' });
  }
};

const getItemsById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const itemFound: SingleProductProps = await getItemByIdExternalApi(id);
    const itemDescription = await getDescriptionItemByIdExternalApi(id);
    const category = await getCategoryById(itemFound?.category_id);
    const categories = category?.path_from_root.map(
      (category) => category.name,
    );

    const item = {
      author,
      categories: categories ?? [],
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
    return res.status(200).json(item);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ author, message: 'Internal server error' });
  }
};

export { getItems, getItemsById };
