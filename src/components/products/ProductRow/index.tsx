import freeShippingIcon from '@assets/ic_shipping.png';
import Amount from '@components/common/Amount';
import Icon from '@components/common/Icon';
import { capitalizeSentence } from '@utils/capitalize';
import { ItemProps } from '../../../types/product.type';
import styles from './ProductRow.module.sass';

interface ProductRowProps {
  product: ItemProps;
  handleClick: (id?: string) => void;
}
const ProductRow = ({ product, handleClick }: ProductRowProps) => {
  const { id, title, price, picture, condition, free_shipping } = product;
  return (
    <div
      className={styles.ProductRow}
      onClick={() => handleClick(id)}
      aria-hidden
    >
      <img className={styles.ProductRow__image} src={picture} alt="" />
      <div className={styles.ProductRow__content}>
        <div className={styles.ProductRow__header}>
          <Amount amount={price?.amount} />
          {free_shipping && (
            <Icon className={styles.ProductRow__icon} icon={freeShippingIcon} />
          )}
        </div>
        <span className={styles.ProductRow__title}>{title}</span>
        <span className={styles.ProductRow__condition}>{condition}</span>
      </div>
      <span className={styles.ProductRow__seller}>
        {capitalizeSentence(product?.seller ?? '')}
      </span>
    </div>
  );
};

export default ProductRow;
