import { useParams } from 'react-router-dom';

import BreadCrumb from '@components/common/BreadCrumb';
import TitleDescription from '@components/common/TitleDescription';
import DetailProductSkeleton from '@components/loaders/DetailProductSkeleton';
import ProductSummary from '@components/products/ProductSummary';
import useProduct from '@hooks/useProduct';
import { useResponsive } from '@hooks/useResponsive';
import stg from '@utils/strings';
import styles from './DetailsProduct.module.sass';

const DetailsProduct = () => {
  const { id } = useParams();
  const { data: productDetail, isLoading } = useProduct({
    id: id ?? '',
  });
  const { isMobile } = useResponsive();
  const { picture, description } = productDetail?.item ?? {};

  return (
    <div className={styles.DetailsProduct}>
      <BreadCrumb list={productDetail?.categories} />
      <div className={styles.DetailsProduct__container}>
        {isLoading ? (
          <DetailProductSkeleton isMobile={isMobile} />
        ) : (
          <div
            className={`${styles.DetailsProduct__content} ${
              isMobile
                ? styles['DetailsProduct__content--mobile']
                : styles['DetailsProduct__content--desktop']
            }`}
          >
            <div className={styles['DetailsProduct__image-container']}>
              <img
                className={styles['DetailsProduct__image-container__image']}
                src={picture}
                alt={picture}
              />
              <TitleDescription
                title={stg('description_product')}
                description={
                  description ?? stg('this_product_does_not_description')
                }
              />
            </div>
            <ProductSummary isMobile={isMobile} {...productDetail?.item} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsProduct;
