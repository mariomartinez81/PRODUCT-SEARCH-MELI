import Amount from './Amount';
import Button from './Button';
import stg from '../utils/strings';
import { ItemProps } from '../types/product.type';

interface ProductSummaryProps extends ItemProps {
  isMobile: boolean;
  className?: string;
}

const ProductSummary = ({
  isMobile,
  className,
  condition,
  sold_quantity,
  title,
  price,
}: ProductSummaryProps) => {
  return (
    <div
      className={
        className ?? `flex flex-col w-5/12 ${isMobile ? 'w-full' : 'w-6/12'}`
      }
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
  );
};

export default ProductSummary;
