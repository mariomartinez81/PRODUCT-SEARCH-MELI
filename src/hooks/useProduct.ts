import { useQuery } from '@tanstack/react-query';

import { getProductsById } from '../services/fetch';

interface UseProductProps {
  id: string;
}

const useProduct = ({ id }: UseProductProps) =>
  useQuery({
    queryKey: ['product', id],
    queryFn: async () => await getProductsById(id),
  });

export default useProduct;
