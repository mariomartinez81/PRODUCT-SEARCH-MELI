import { useParams } from 'react-router-dom';

import { useResponsive } from '../hooks/useResponsive';
import stg from '../utils/strings';
import useProduct from '../hooks/useProduct';
import DetailProductSkeleton from '../components/loaders/DetailProductSkeleton';
import BreadCrumb from '../components/BreadCrumb';
import ProductSummary from '../components/ProductSummary';
import TitleDescription from '../components/TitleDescription';

const DetailsProduct = () => {
  const { id } = useParams();
  const { data: productDetail, isLoading } = useProduct({
    id: id ?? '',
  });
  const { isMobile } = useResponsive();
  const { picture, description } = productDetail?.item ?? {};

  return (
    <div className="w-full">
      <BreadCrumb list={productDetail?.categories} />
      <div className="flex flex-col items-center self-center w-full h-full p-6 bg-white">
        {isLoading ? (
          <DetailProductSkeleton isMobile={isMobile} />
        ) : (
          <div className={`flex ${isMobile ? 'flex-col gap-6' : 'flex-row'} `}>
            <div className="flex flex-col p">
              <img
                className="self-center w-6/12 h-6/12"
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
