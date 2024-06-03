import styles from './ProductsListSkeleton.module.sass';

const ProductsListSkeleton = () => (
  <div
    data-testid="skeleton-product-row"
    className={styles['skeleton-product-row']}
    aria-hidden
  >
    <div className={styles.image} />
    <div className={styles.content}>
      <div className={styles['text-lines']}>
        <div className={styles['line-1']}></div>
        <div className={styles['line-2']}></div>
        <div className={styles['line-3']}></div>
      </div>
    </div>
    <div className={styles.price}></div>
  </div>
);

export default ProductsListSkeleton;
