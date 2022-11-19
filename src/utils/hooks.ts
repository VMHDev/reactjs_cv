import { useMediaQuery } from '@react-hook/media-query';

import sizes from 'src/styles/variables/sizes';

export const useDetectDevice: () => {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} = () => {
  const isMobile: boolean = useMediaQuery(
    `screen and (min-width: ${sizes.mobile_min_width}) and (max-width: ${sizes.mobile_max_width})`
  );

  const isTablet: boolean = useMediaQuery(
    `screen and (min-width: ${sizes.tablet_min_width}) and (max-width: ${sizes.tablet_max_width})`
  );

  const isDesktop: boolean = useMediaQuery(`screen and (min-width: ${sizes.desktop_min_width})`);
  return { isMobile, isTablet, isDesktop };
};

export const useIsMobile: () => boolean = () => {
  const isMobile: boolean = useMediaQuery(
    `screen and (min-width: ${sizes.mobile_min_width}) and (max-width: ${sizes.mobile_max_width})`
  );
  return isMobile;
};

export const useIsTablet: () => boolean = () => {
  const isTablet: boolean = useMediaQuery(
    `screen and (min-width: ${sizes.tablet_min_width}) and (max-width: ${sizes.tablet_max_width})`
  );
  return isTablet;
};

export const useIsDesktop: () => boolean = () => {
  const isDesktop: boolean = useMediaQuery(`screen and (min-width: ${sizes.desktop_min_width})`);
  return isDesktop;
};
