import React from 'react';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header = ({ className, children }: HeaderProps) => (
  <div
    className={
      className ?? 'w-full p-3 bg-[#FFE309] flex items-center justify-center'
    }
  >
    {children}
  </div>
);
export default Header;
