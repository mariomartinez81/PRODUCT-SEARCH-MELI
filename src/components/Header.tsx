import React from 'react';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header = ({ className, children }: HeaderProps) => (
  <div
    className={
      className ??
      'w-full bg-[#FFE309] flex items-center justify-center py-3 px-4'
    }
  >
    {children}
  </div>
);
export default Header;
