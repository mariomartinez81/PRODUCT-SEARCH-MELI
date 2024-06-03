import Amount from '@components/common/Amount';
import Button from '@components/common/Button';
import stg from '@utils/strings';
import { ItemProps } from '../../../types/product.type';
import styles from './ProductSummary.module.sass';

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
        className ??
        `${styles.ProductSummary} ${
          isMobile
            ? styles['ProductSummary--mobile']
            : styles['ProductSummary--desktop']
        }`
      }
    >
      <span className={styles.ProductSummary__quantity}>
        {stg('quantity_products_sold', {
          replace: { '%condition': condition, '%qty': sold_quantity },
        })}
      </span>
      <div className={styles.ProductSummary__title}>
        <h2>{title}</h2>
      </div>
      <div>
        <Amount
          amount={price?.amount}
          decimals={price?.decimals}
          classNameIntegerPart={styles.ProductSummary__amount__integer_part}
          classNameDecimalPart={styles.ProductSummary__amount__decimal_part}
        />
        <Button
          className={styles.ProductSummary__button}
          text={stg('buy')}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ProductSummary;
