import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/api';
import axios from 'axios';
import { ProductsProps } from '../types/product.type';

interface useAllProductsProps {
  search: string;
}

const useAllProducts = ({ search }: useAllProductsProps) => {
  if (!search) return;
  return useQuery({
    queryKey: ['allProducts', search],
    queryFn: async () => {
      const products = await axios.get(
        `http://localhost:3002/api/items?q=${search}`,
      );
      return products.data;
    },
    refetchOnWindowFocus: false,
  });
};

export default useAllProducts;
