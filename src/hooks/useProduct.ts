import { useQuery } from '@tanstack/react-query';
import { getProductsById } from '../services/api';
import axios from 'axios';

interface UseProductProps {
  id: string;
}

const useProduct = ({ id }: UseProductProps) => {
  if (!id) return;
  console.log('==============================');
  console.log('paso', id);
  console.log('==============================');
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const products = await axios.get(`http://localhost:3002/api/items/${id}`);
      return products.data;
    },
  });
};

export default useProduct;
