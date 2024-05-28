import axios from 'axios';
import { environment } from '../utils/constanst';
import { ProductsProps } from '../types/product.type';

const { API_URL } = environment;
console.log('==============================');
console.log({ API_URL });
console.log('==============================');
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002' ?? API_URL,
});

export const getProducts = async (search: string) => {
  return await axios.get(`http://localhost:3002/api/items?q=${search}`);
};
// export const getProducts = async (search: string) => {
//   const response = await axiosInstance.get<ProductsProps>(
//     `/api/items?q=${search}`,
//   );
//   return response.data;
// };

export const getProductsById = async (id: string) => {
  const response = await axiosInstance.get<ProductsProps>(`/api/items/${id}`);
  return response.data;
};
