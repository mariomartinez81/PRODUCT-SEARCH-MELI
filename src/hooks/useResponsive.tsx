import * as React from 'react';

export declare type ScreenSizeStatusType = {
  currentScreenWidth: number;
  currentScreenHeight: number;
  isMobile: boolean;
  isTablet: boolean;
  isTabletAndUp: boolean;
  isLaptop: boolean;
  isLaptopAndUp: boolean;
  isDesktop: boolean;
  isLTETablet: boolean;
  isLTELaptop: boolean;
  isLandscape: boolean;
  isTouchDevice: boolean;
};

export declare type ResponsiveStatusPropType = {};

export declare type UseResponsiveStatusInputType = {};

export declare type UseResponsiveStatusOutputType = {
  currentScreenWidth: number;
  currentScreenHeight: number;
  isMobile: boolean;
  isTablet: boolean;
  isTabletAndUp: boolean;
  isLaptop: boolean;
  isLaptopAndUp: boolean;
  isDesktop: boolean;
  isLTETablet: boolean;
  isLTELaptop: boolean;
  isLandscape: boolean;
  isTouchDevice: boolean;
};

export const useResponsive = (): UseResponsiveStatusOutputType => {
  const size = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768, //  768 <= tablet size < 1024
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560,
  };

  const [currentScreenSize, setScreenSize] =
    React.useState<ScreenSizeStatusType>({
      currentScreenWidth: window.innerWidth,
      currentScreenHeight: window.innerHeight,
      isMobile: window.innerWidth < size.tablet,
      isTablet:
        size.tablet <= window.innerWidth && window.innerWidth < size.laptop,
      isTabletAndUp: window.innerWidth >= size.tablet,
      isLaptop:
        size.laptop <= window.innerWidth && window.innerWidth < size.desktop,
      isLaptopAndUp: window.innerWidth >= size.laptop,
      isDesktop: size.desktop <= window.innerWidth,
      isLTETablet: window.innerWidth < size.laptop,
      isLTELaptop: window.innerWidth < size.desktop,
      isLandscape: window.innerWidth > window.innerHeight,
      isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    });

  React.useEffect(() => {
    function handleScreenWidth() {
      setScreenSize({
        currentScreenWidth: window.innerWidth,
        currentScreenHeight: window.innerHeight,
        isMobile: window.innerWidth < size.tablet,
        isTablet:
          size.tablet <= window.innerWidth && window.innerWidth < size.laptop,
        isTabletAndUp: window.innerWidth >= size.tablet,
        isLaptop:
          size.laptop <= window.innerWidth && window.innerWidth < size.desktop,
        isLaptopAndUp: window.innerWidth >= size.laptop,
        isDesktop: size.desktop <= window.innerWidth,
        isLTETablet: window.innerWidth < size.laptop,
        isLTELaptop: window.innerWidth < size.desktop,
        isLandscape: window.innerWidth > window.innerHeight,
        isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      });
    }

    window.addEventListener('resize', handleScreenWidth);

    return () => {
      window.removeEventListener('resize', handleScreenWidth);
    };
  }, [JSON.stringify(currentScreenSize)]);

  return currentScreenSize;
};
