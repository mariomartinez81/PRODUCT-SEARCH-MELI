import axios from 'axios';

import { environment } from '../utils/constants';
import { ProductProps, ProductsProps } from '../types/product.type';

console.log('API_URL', environment?.API_URL);

const { API_URL } = environment;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const getProducts = async (search: string) => {
  try {
    const response = await axiosInstance.get<ProductsProps>(
      `/api/items?q=${search}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductsById = async (id: string) => {
  try {
    const response = await axiosInstance.get<ProductProps>(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
