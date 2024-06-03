import { CSSProperties, ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import Button from '@components/common/Button';
import { spaceBreakFromStrings } from '@utils/spaceBreakFromStrings';
import styles from './EmptyState.module.sass';
import classNames from 'classnames';

interface ResultsNotFoundsProps {
  title: string;
  primaryIcon?: ReactNode;
  className?: string;
  description?: string | ReactNode | ReactElement;
  hasButton?: boolean;
  textButton?: string | ReactNode | ReactElement;
  callback?: (() => void) | any;
  style?: CSSProperties;
  hasActionPermission?: boolean;
  styleButton?: CSSProperties;
  classNameTexts?: string;
  customIconButton?: ReactNode | ReactElement;
  classNameButton?: string;
  descriptionCustomClass?: string;
  goTo?: string;
}

const EmptyState = ({
  title,
  primaryIcon,
  className,
  description,
  hasButton = false,
  textButton = '',
  callback,
  style,
  hasActionPermission = true,
  styleButton,
  classNameTexts,
  customIconButton,
  classNameButton,
  descriptionCustomClass,
  goTo,
}: ResultsNotFoundsProps) => {
  const classButton = classNames(styles.button, {
    ['styles.button__no-permission']: !hasActionPermission,
  });
  const buttonRender = (
    <Button
      disabled={!hasActionPermission}
      data-testid={`callback-${textButton}`}
      onClick={() => callback?.()}
      style={
        styleButton ?? {
          width: 'calc(100% - 2rem)',
        }
      }
      className={`mx-3 ${classButton} ${classNameButton}`}
    >
      {customIconButton ?? null}
      {textButton}
    </Button>
  );

  return (
    <div className={styles.EmptyState} style={style}>
      <div className={`${styles.EmptyState__container} ${className} `}>
        <div>{primaryIcon}</div>

        <div
          className={` ${styles.EmptyState__container__containerTitleDescription} ${classNameTexts}`}
        >
          <span
            className={
              styles.EmptyState__container__containerTitleDescription__title
            }
          >
            {spaceBreakFromStrings(title)}
          </span>
          {description && (
            <span
              className={`${
                descriptionCustomClass ??
                styles.EmptyState__container__containerTitleDescription__description
              }`}
            >
              {typeof description === 'string'
                ? spaceBreakFromStrings(description)
                : description}
            </span>
          )}
        </div>

        {hasButton &&
          (goTo?.length ? (
            <Link className={styles.EmptyState__container} to={goTo}>
              {buttonRender}
            </Link>
          ) : (
            buttonRender
          ))}
      </div>
    </div>
  );
};

export default EmptyState;
