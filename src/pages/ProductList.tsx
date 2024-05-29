import { useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import ProductRow from '../components/ProductRow';
import useAllProducts from '../hooks/useAllProducts';
import { ItemProps } from '../types/product.type';
import BreadCrumb from '../components/BreadCrumb';
import useQueryParams from '../hooks/useQueryParams';
import EmptyState from '../components/EmptyState';
import stg from '../utils/strings';
import ProductsListSkeleton from '../components/loaders/ProductsListSkeleton';
import setSkeletonLoading from '../utils/setSkeletonLoading';

const ProductList = () => {
  const { state } = useLocation();
  const queryParams = useQueryParams();
  const search = queryParams.get('search');

  const { data: productsData, isLoading } = useAllProducts({
    search: state?.search || search,
  }) as any;

  const hasProducts = !!productsData?.items?.length;
  const navigate = useNavigate();
  const handleClick = (id?: string) => navigate(`/items/${id}`);

  return (
    <div className="w-full">
      <BreadCrumb list={productsData?.categories} />

      <div className="flex flex-col items-center self-center w-full h-full px-3 bg-white">
        {!hasProducts &&
          isLoading &&
          setSkeletonLoading(4, <ProductsListSkeleton />)}

        {hasProducts &&
          productsData?.items
            ?.slice(0, 4)
            ?.map((product: ItemProps) => (
              <ProductRow
                key={product?.id}
                product={product}
                handleClick={handleClick}
              />
            ))}
        {!hasProducts && !isLoading && (
          <EmptyState
            title={stg('products_not_found')}
            description={stg('please_search_another_option')}
            className="w-full"
            style={{ width: '100%' }}
            primaryIcon={
              <HiOutlineExclamationCircle
                className="mt-6 text-red-600"
                size={32}
              />
            }
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
