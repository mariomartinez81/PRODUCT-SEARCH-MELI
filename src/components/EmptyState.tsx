import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { spaceBreakFromStrings } from '../utils/spaceBreakFromStrings';
import Button from './Button';

interface ResultsNotFoundsProps {
  title: string;
  primaryIcon?: ReactNode;
  secondaryIcon?: ReactNode;
  className?: string;
  description?: string | ReactNode | ReactElement;
  hasButton?: boolean;
  textButton?: string | ReactNode | ReactElement;
  classNameSecundaryIcon?: string;
  sizeContainerPrimaryIcon?: number;
  sizeContainerSecundaryIcon?: number;
  customIconsGroup?: ReactNode | ReactElement;
  callback?: (() => void) | any;
  style?: CSSProperties;
  hasEditPermission?: boolean;
  hasActionPermission?: boolean;
  styleButton?: CSSProperties;
  classNameTexts?: string;
  customIconButton?: ReactNode | ReactElement;
  classNameButton?: string;
  primaryButtonRef?: React.RefObject<HTMLButtonElement>;
  descriptionCustomClass?: string;
  bgPrimaryIcon?: string;
  goTo?: string;
  backgroundColor?: string;
}

const EmptyState = ({
  title,
  primaryIcon,
  secondaryIcon,
  className,
  description,
  classNameSecundaryIcon,
  hasButton = false,
  textButton = '',
  customIconsGroup,
  sizeContainerPrimaryIcon = 20,
  sizeContainerSecundaryIcon = 9,
  callback,
  style,
  hasEditPermission = true,
  hasActionPermission = true,
  styleButton,
  classNameTexts,
  customIconButton,
  classNameButton,
  primaryButtonRef,
  descriptionCustomClass,
  bgPrimaryIcon,
  goTo,
  backgroundColor,
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
        {primaryIcon}

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
          hasEditPermission &&
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
