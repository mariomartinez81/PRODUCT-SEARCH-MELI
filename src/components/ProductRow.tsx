import React from 'react';
import { ItemProps } from '../types/product.type';
import freeShippingIcon from '../assets/ic_shipping.png';
import Icon from './Icon';
import Amount from './Amount';

interface ProductRowProps {
  product: ItemProps;
  handleClick: (id?: string) => void;
}

const ProductRow = ({ product, handleClick }: ProductRowProps) => {
  const {
    id,
    title,
    price,
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description,
  } = product ?? {};
  return (
    <div
      className="flex justify-center w-full border-b cursor-pointer"
      onClick={() => handleClick(id)}
      aria-hidden
    >
      <img className="w-44 h-44" src={picture} alt="" />
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2">
          <Amount amount={price?.amount} />
          {free_shipping && <Icon className="flex" icon={freeShippingIcon} />}
        </div>
        <span>{title}</span>
        <span>{condition}</span>
      </div>
      <span className="w-1/5 text-[10px] tracking-tighter text-gray-500">
        Capital Federal
      </span>
    </div>
  );
};

export default ProductRow;
