import React from 'react';
import styles from './Header.module.sass';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header = ({ className, children }: HeaderProps) => (
  <div className={className ?? styles.Header}>{children}</div>
);
export default Header;
