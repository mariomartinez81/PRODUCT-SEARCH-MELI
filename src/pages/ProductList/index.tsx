import { useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import ProductRow from '@components/products/ProductRow';
import BreadCrumb from '@components/common/BreadCrumb';
import EmptyState from '@components/common/EmptyState';
import ProductsListSkeleton from '@components/loaders/ProductsListSkeleton';
import useAllProducts from '@hooks/useAllProducts';
import useQueryParams from '@hooks/useQueryParams';
import setSkeletonLoading from '@utils/setSkeletonLoading';
import stg from '@utils/strings';
import { ItemProps } from '../../types/product.type';
import styles from './ProductList.module.sass';

const ProductList = () => {
  const { state } = useLocation();
  const queryParams = useQueryParams();
  const search = queryParams.get('search');

  const { data: productsData, isLoading } = useAllProducts({
    search: state?.search || search,
  });

  const hasProducts = !!productsData?.items?.length;
  const navigate = useNavigate();
  const handleClick = (id?: string) => navigate(`/items/${id}`);

  return (
    <div className={styles.ProductList}>
      <BreadCrumb list={productsData?.categories} />

      <div className={styles.ProductList__container}>
        {!hasProducts &&
          isLoading &&
          setSkeletonLoading(4, <ProductsListSkeleton />)}

        {hasProducts &&
          productsData?.items?.map((product: ItemProps) => (
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
            className={styles['ProductList__empty-state']}
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
