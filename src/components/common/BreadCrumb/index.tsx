import classNames from 'classnames';
import { GoChevronRight } from 'react-icons/go';
import styles from './BreadCrumb.module.sass';

interface BreadCrumbProps {
  list?: string[];
}

const BreadCrumb = ({ list }: BreadCrumbProps) => {
  const lastItem = list?.[list.length - 1];

  const itemStyles = (isLastItem: boolean) =>
    classNames(styles.BreadCrumb__list__item, {
      [styles.BreadCrumb__list__item__last]: isLastItem,
    });

  return (
    <div className={styles.BreadCrumb}>
      {list?.map((item, i) => {
        const isLastItem = item === lastItem;
        return (
          <div key={`${item}-${i}`} className={styles.BreadCrumb__list}>
            <span className={itemStyles(isLastItem)}>{item}</span>
            {!isLastItem && (
              <span className={styles.BreadCrumb__list__icon}>
                <GoChevronRight size={16} />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
