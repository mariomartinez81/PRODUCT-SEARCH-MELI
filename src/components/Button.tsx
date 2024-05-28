import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  backgroundColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
}

const Button = ({
  className,
  backgroundColor = '#296AF8',
  text,
  size = 'xs',
  ...rest
}: ButtonProps) => (
  <button
    className={
      className ??
      `flex justify-center items-center py-2 w-full rounded-sm text-white cursor-pointer bg-${backgroundColor} bg-[${backgroundColor}] text-${size}`
    }
    {...rest}
  >
    {text}
  </button>
);

export default Button;
