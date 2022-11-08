import styled from 'styled-components';
import variables from 'src/styles/variables';

export const ContainerPagesStyled = styled.div<{
  isCenterPage: boolean;
  isFullHeight: boolean;
  isFullHeightNoneHeader: boolean;
}>`
  background-color: var(--color_dark);
  display: flex;
  flex-direction: column;

  justify-content: ${(props: any) => (props.isCenterPage ? 'center' : 'space-between')};
  align-items: ${(props: any) => (props.isCenterPage ? 'center' : 'baseline')};

  min-height: ${(props: any) =>
    props.isFullHeight
      ? `calc(100vh - ${variables.layouts.header_height_desktop})`
      : props.isFullHeightNoneHeader
      ? '100vh'
      : '0rem'};

  @media ${variables.devices.media_tablet} {
    min-height: ${(props: any) =>
      props.isFullHeight
        ? `calc(100vh - ${variables.layouts.header_height_tablet})`
        : props.isFullHeightNoneHeader
        ? '100vh'
        : '0rem'};
  }
  @media ${variables.devices.media_mobile} {
    min-height: ${(props: any) =>
      props.isFullHeight
        ? `calc(100vh - ${variables.layouts.header_height_mobile})`
        : props.isFullHeightNoneHeader
        ? '100vh'
        : '0rem'};
  }
`;

export const ContainerContentStyled = styled.div<{ isNoPadding: boolean }>`
  width: 100%;
  @media ${variables.devices.media_mobile} {
    padding: ${(props: any) => (props.noPadding ? 0 : '0% 5.8% 0% 5.8%')};
  }
  @media ${variables.devices.media_tablet} {
    padding: ${(props: any) => (props.noPadding ? 0 : '0rem 4.8rem 0rem 4.8rem')};
  }
  @media ${variables.devices.media_desktop} {
    padding: ${(props: any) => (props.noPadding ? 0 : '0rem 10rem 0rem 10rem')};
  }
`;
