import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../services/fetch';

interface UseAllProductsProps {
  search: string;
}

const useAllProducts = ({ search }: UseAllProductsProps) =>
  useQuery({
    queryKey: ['allProducts', search],
    queryFn: async () => await getProducts(search),
    refetchOnWindowFocus: false,
  });

export default useAllProducts;
