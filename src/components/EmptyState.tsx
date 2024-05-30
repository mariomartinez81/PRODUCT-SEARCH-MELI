import { CSSProperties, ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import { spaceBreakFromStrings } from '../utils/spaceBreakFromStrings';

interface ResultsNotFoundsProps {
  title: string;
  primaryIcon?: ReactNode;
  className?: string;
  description?: string | ReactNode | ReactElement;
  hasButton?: boolean;
  textButton?: string | ReactNode | ReactElement;
  callback?: (() => void) | any;
  style?: CSSProperties;
  hasActionPermission?: boolean;
  styleButton?: CSSProperties;
  classNameTexts?: string;
  customIconButton?: ReactNode | ReactElement;
  classNameButton?: string;
  descriptionCustomClass?: string;
  goTo?: string;
}

const EmptyState = ({
  title,
  primaryIcon,
  className,
  description,
  hasButton = false,
  textButton = '',
  callback,
  style,
  hasActionPermission = true,
  styleButton,
  classNameTexts,
  customIconButton,
  classNameButton,
  descriptionCustomClass,
  goTo,
}: ResultsNotFoundsProps) => {
  const buttonRender = (
    <Button
      disabled={!hasActionPermission}
      data-testid={`callback-${textButton}`}
      onClick={() => callback?.()}
      style={
        styleButton ?? {
          width: 'calc(100% - 2rem)',
        }
      }
      className={`mx-3 ${classNameButton ?? ''} ${
        !hasActionPermission && 'text-gray-500 cursor-not-allowed'
      }`}
    >
      {customIconButton ?? null}
      {textButton}
    </Button>
  );

  return (
    <div
      className="flex items-center justify-center w-full h-full px-3 "
      style={style}
    >
      <div className={`flex flex-col items-center ${className ?? 'w-2/5'} `}>
        <div>{primaryIcon}</div>

        <div className={`flex flex-col space-y-3 py-9 ${classNameTexts ?? ''}`}>
          <span className="w-full text-2xl font-semibold text-center">
            {spaceBreakFromStrings(title)}
          </span>
          {description && (
            <span
              className={`${
                descriptionCustomClass ??
                'w-full text-sm text-center text-gray-500'
              }`}
            >
              {typeof description === 'string'
                ? spaceBreakFromStrings(description)
                : description}
            </span>
          )}
        </div>

        {hasButton &&
          (goTo?.length ? (
            <Link className="flex justify-center w-full" to={goTo}>
              {buttonRender}
            </Link>
          ) : (
            buttonRender
          ))}
      </div>
    </div>
  );
};

export default EmptyState;
