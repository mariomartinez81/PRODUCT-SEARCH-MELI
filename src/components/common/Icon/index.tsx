import React from 'react';
import styles from './Icon.module.sass';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  icon: string | React.ReactNode;
}

const Icon = ({ className, icon, ...rest }: IconProps) => {
  const isIconString = typeof icon === 'string';

  return (
    <div className={className ?? styles.Icon} {...rest}>
      {isIconString ? (
        <img className={styles.Icon__icon_image} src={icon} alt={icon} />
      ) : (
        <>{icon}</>
      )}
    </div>
  );
};

export default Icon;
