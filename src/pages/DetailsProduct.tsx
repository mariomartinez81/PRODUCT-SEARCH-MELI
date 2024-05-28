import React from 'react';
import Button from '../components/Button';
import { useResponsive } from '../hooks/useResponsive';
import stg from '../utils/strings';
import Amount from '../components/Amount';
import useProduct from '../hooks/useProduct';
import { useParams } from 'react-router-dom';

interface DetailsProductProps {}

const DetailsProduct = ({}: DetailsProductProps) => {
  const { id } = useParams();
  const { data: productDetail, isLoading } = useProduct({
    id: id ?? '',
  }) as any;

  console.log('==============================');
  console.log(productDetail?.item);
  console.log('==============================');
  const { isMobile } = useResponsive();
  const {
    title,
    price,
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description,
  } = productDetail?.item ?? {};
  return (
    <div>
      <div className="flex flex-col items-center self-center w-full p-6 bg-white">
        {isLoading && <div>Loading...</div>}
        <div className={`flex ${isMobile ? 'flex-col gap-6' : 'flex-row'} `}>
          <div className="flex flex-col p">
            <img
              className="self-center w-6/12 h-6/12"
              src={picture}
              alt={picture}
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-normal text-gray-900">
                {stg('description_product')}
              </h2>
              <span className="text-[12px] text-gray-500">
                {description || stg('this_product_does_not_description')}
              </span>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/12 ${isMobile ? 'w-full' : 'w-6/12'}`}
          >
            <span className="text-[11px] w-full">
              {stg('quantity_products_sold', {
                replace: { '%condition': condition, '%qty': sold_quantity },
              })}
            </span>
            <div className="w-full font-semibold">
              <h2>{title}</h2>
            </div>
            <div>
              <Amount
                amount={price?.amount}
                decimals={price?.decimals}
                classNameIntegerPart="flex text-[2.3rem] font-normal gap-1.5"
                classNameDecimalPart=" text-[1rem] self-start pt-2"
              />
              <Button
                className="mt-8 bg-[#296AF8] text-white w- rounded-md w-full"
                text={stg('buy')}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
