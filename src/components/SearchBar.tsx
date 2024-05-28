import { ReactElement } from 'react';
import Icon from './Icon';

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
  const classes = className ?? `flex w-full h-full bg-white rounded-sm`;
  return (
    <div className={classes}>
      <input
        className="flex justify-center items-center w-full px-[10px] h-full"
        type="text"
        {...rest}
      />
      {icon && (
        <Icon
          className="flex justify-center items-center h-full px-2 rounded-r-sm bg-gray-300 cursor-pointer"
          icon={icon}
          onClick={onClickIcon}
        />
      )}
    </div>
  );
};

export default SearchBar;
