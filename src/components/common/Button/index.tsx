import React from 'react';
import styles from './Button.module.sass';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: 'extra-small' | 'small' | 'medium' | 'large';
  text?: string | React.ReactNode;
  typeButton?: 'primary';
}

const Button = ({
  className,
  text,
  size = 'extra-small',
  typeButton = 'primary',
  ...rest
}: ButtonProps) => {
  const classNameType = {
    primary: styles.Button__primary,
  };

  return (
    <button
      className={`${classNameType[typeButton]} ${size} ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
