import React, { ReactElement } from 'react';

import Icon from '@components/common/Icon';
import styles from './SearchBar.module.sass';

interface SearchBarProps extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  icon?: ReactElement | string;
  onClickIcon?: () => void;
  handleKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({
  className,
  icon,
  onClickIcon,
  handleKeyPress,
  ...rest
}: SearchBarProps) => {
  const classes = className ?? styles.SearchBar;
  return (
    <div className={classes}>
      <input
        className={styles.SearchBar__input}
        type="text"
        onKeyPress={handleKeyPress}
        {...rest}
      />
      {icon && (
        <Icon
          className={styles.SearchBar__icon}
          icon={icon}
          onClick={onClickIcon}
        />
      )}
    </div>
  );
};

export default SearchBar;
