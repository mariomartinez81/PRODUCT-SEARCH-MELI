import axios from 'axios';
import { config } from './constants';
import { CategoryProps } from '../types/category.type';
import { SingleProductProps } from '../types/singleProduct.type';
import { ProductsFoundProps } from '../types/products.type';
import { DescriptionProps } from '../types/description.type';

type inputGetItemsFromExternalApi = {
  search: string;
  limit?: number;
  offset?: number;
};

const { API_URL } = config;

export const fetchExternalApi = async (url: string, operationName?: string) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(`Error fetch ${operationName}: ${error}`);
  }
};

export const getItemsFromExternalApi = async ({
  search,
  offset,
  limit,
}: inputGetItemsFromExternalApi): Promise<ProductsFoundProps> =>
  await fetchExternalApi(
    `${API_URL}/sites/MLA/search?q=${search}&offset=${offset}&limit=${limit}`,
    'getItemsFromExternalApi',
  );

export const getItemByIdExternalApi = async (
  id: string,
): Promise<SingleProductProps> =>
  await fetchExternalApi(`${API_URL}/items/${id}`, 'getItemByIdExternalApi');

export const getDescriptionItemByIdExternalApi = async (
  id: string,
): Promise<DescriptionProps> =>
  await fetchExternalApi(
    `${API_URL}/items/${id}/description`,
    'getDescriptionItemByIdExternalApi',
  );

export const getCategoryById = async (id: string): Promise<CategoryProps> =>
  await fetchExternalApi(
    `${API_URL}/categories/${id}`,
    'getCategoryByIdExternalApi',
  );
