import React from 'react';
import Button from '../components/Button';
import { useResponsive } from '../hooks/useResponsive';
import stg from '../utils/strings';
import Amount from '../components/Amount';

interface DetailsProductProps {}

const DetailsProduct = ({}: DetailsProductProps) => {
  const productDetail = {
    author: {
      name: 'mario',
      lastname: 'martinez',
    },
    item: {
      id: '1',
      title:
        'Audífonos Sony Noise Cancelling Bluetooth Hi-res Wh-1000xm4 Color Negro',
      price: {
        currency: 'ARS',
        amount: 1930,
        decimals: 2,
      },
      picture:
        'https://http2.mlstatic.com/D_NQ_NP_2X_901878-MLA45726882502_042021-F.webp',
      condition: 'New',
      free_shipping: true,
      sold_quantity: 234,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscingelit. Donec commodo hendrerit fermentum. Vestibulum leo velit, consequat euporttitor a, laoreet quis purus. Integer congue, quam eu finibus sollicitudin, nibh lectus elementum nisi, rutrum hendrerit augue ante id metus. Vestibulum maximus justo sit amet urna condimentum,elit laoreet. Ut bibendum ut nibh non dapibus. Donecmaximus molestie erat, in rutrum nisi aliquam quis. Cras bibendumelit ac venenatis semper. Praesent luctus consequat sapien nonsagittis. Mauris urna dui, commodo fringilla felis sed, laoreeteleifend odio. Vestibulum egestas id nibh nec volutpat. Donec acblandit enim, a feugiat risus. Interdum et malesuada fames ac anteipsum primis in faucibus.',
    },
  };
  const { isMobile } = useResponsive();
  const {
    title,
    price,
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description,
  } = productDetail.item ?? {};
  return (
    <div className="flex flex-col items-center bg-white self-center w-full p-6">
      <div className={`flex ${isMobile ? 'flex-col gap-6' : 'flex-row'} `}>
        <div className="flex flex-col">
          <img
            className="w-6/12 h-6/12 self-center"
            src={picture}
            alt={picture}
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-xl text-gray-900 font-normal">
              {stg('description_product')}
            </h2>
            <span className="text-[12px] text-gray-500">{description}</span>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <span className="text-[11px]">
            {stg('quantity_products_sold', {
              replace: { '%condition': condition, '%qty': sold_quantity },
            })}
          </span>
          <div className="font-semibold">
            <h2>Deco Reverse</h2>
            <h2>Sombrero Oxford</h2>
          </div>
          <div>
            <Amount
              amount={price?.amount}
              decimals={price?.decimals}
              classNameIntegerPart="flex text-[3rem] font-bold gap-1.5"
              classNameDecimalPart=" text-[1.5rem] self-start"
            />
            <Button text={stg('buy')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
