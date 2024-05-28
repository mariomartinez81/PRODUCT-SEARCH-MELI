import React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  icon: string | React.ReactNode;
}

const Icon = ({ className, icon, ...rest }: IconProps) => {
  const urlIconImage = typeof icon === 'string';
  return (
    <div className={className ?? 'rounded-full h-12 w-12'} {...rest}>
      {urlIconImage ? (
        <img className="h-fit w-fit" src={icon} alt={icon} />
      ) : (
        <>{icon}</>
      )}
    </div>
  );
};

export default Icon;
