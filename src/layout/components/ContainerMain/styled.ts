import styled from 'styled-components';
import devices from 'src/styles/variables/devices';
import layouts from 'src/styles/variables/layouts';

export const ContainerPagesStyled = styled.div<{
  isCenterPage: boolean;
  isFullHeight: boolean;
  isFullHeightNoneHeader: boolean;
}>`
  background-color: var(--color_black);
  display: flex;
  flex-direction: column;

  justify-content: ${(props: any) => (props.isCenterPage ? 'center' : 'space-between')};
  align-items: ${(props: any) => (props.isCenterPage ? 'center' : 'baseline')};

  min-height: ${(props: any) =>
    props.isFullHeight
      ? `calc(100vh - ${layouts.header_height_desktop})`
      : props.isFullHeightNoneHeader
      ? '100vh'
      : '0rem'};

  @media ${devices.media_tablet} {
    min-height: ${(props: any) =>
      props.isFullHeight
        ? `calc(100vh - ${layouts.header_height_tablet})`
        : props.isFullHeightNoneHeader
        ? '100vh'
        : '0rem'};
  }
  @media ${devices.media_mobile} {
    min-height: ${(props: any) =>
      props.isFullHeight
        ? `calc(100vh - ${layouts.header_height_mobile})`
        : props.isFullHeightNoneHeader
        ? '100vh'
        : '0rem'};
  }
`;

export const ContainerContentStyled = styled.div<{ isNoPadding: boolean }>`
  width: 100%;
  @media ${devices.media_mobile} {
    padding: ${(props: any) => (props.noPadding ? 0 : '0% 5.8% 0% 5.8%')};
  }
  @media ${devices.media_tablet} {
    padding: ${(props: any) => (props.noPadding ? 0 : '0rem 4.8rem 0rem 4.8rem')};
  }
  @media ${devices.media_desktop} {
    padding: ${(props: any) => (props.noPadding ? 0 : '0rem 10rem 0rem 10rem')};
  }
`;
