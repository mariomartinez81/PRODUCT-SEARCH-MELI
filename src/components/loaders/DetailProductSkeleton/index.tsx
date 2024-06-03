import styles from './DetailProductSkeleton.module.sass';

interface DetailProductSkeletonProps {
  isMobile: boolean;
}

const DetailProductSkeleton = ({ isMobile }: DetailProductSkeletonProps) => (
  <div
    data-testid="skeleton-details-product"
    className={`${styles['skeleton-details-product']} ${
      isMobile ? styles.mobile : styles.desktop
    }`}
  >
    <div className={styles.content}>
      <div className={styles.center}>
        <div className={styles.image} />
      </div>
      <div className={styles.info}>
        <div className={`${styles.line} ${styles['line-large']}`}></div>
        <div className={`${styles.line} ${styles['line-small']}`}></div>
        <div className={`${styles.line} ${styles['line-small']}`}></div>
        <div className={`${styles.line} ${styles['line-small']}`}></div>
        <div className={`${styles.line} ${styles['line-small']}`}></div>
        <div className={`${styles.line} ${styles['line-small']}`}></div>
        <div className={`${styles.line} ${styles['line-small']}`}></div>
      </div>
    </div>
    <div
      className={`${styles.sidebar} ${
        isMobile ? styles.mobile : styles.desktop
      }`}
    >
      <div className={`${styles.line} ${styles['line-large']}`}></div>
      <div className={styles.info}>
        <div className={`${styles.line} ${styles['line-small']}`}></div>
        <div className={`${styles.line} ${styles['line-small']}`}></div>
        <div className={`${styles.line} ${styles['line-small']}`}></div>
      </div>
      <div>
        <div className={styles.cta}></div>
        <div className={styles['cta-small']}></div>
      </div>
    </div>
  </div>
);

export default DetailProductSkeleton;
