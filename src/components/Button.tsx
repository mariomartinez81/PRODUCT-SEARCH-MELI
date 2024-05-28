import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  backgroundColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  text?: string | React.ReactNode;
}

const Button = ({
  className,
  backgroundColor,
  text,
  size = 'xs',
  ...rest
}: ButtonProps) => (
  <button
    className={`flex justify-center items-center py-2 w-full rounded-sm text-white cursor-pointer bg-[${
      backgroundColor ?? '#296AF8'
    }] text-${size} ${className}`}
    {...rest}
  >
    {text}
  </button>
);

export default Button;
