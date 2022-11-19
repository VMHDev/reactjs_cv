import styled from 'styled-components';
import devices from 'src/styles/variables/devices';

import { Image } from 'antd';
import Text from 'src/components/Custom/Text';

export const ContainerStyled = styled.div`
  padding: 6.4rem 4.8rem;
  color: var(--color_dark);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  background-color: var(--color_black);
`;

export const ImageStyled = styled(Image)`
  width: 28.6rem;
  height: 6.6rem;
  margin-bottom: 3.6rem;

  @media ${devices.media_tablet} {
    width: 22.6rem;
    height: unset;
    margin-bottom: 3rem;
  }
`;

export const DescStyled = styled(Text)`
  display: block;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 3.6rem;

  @media ${devices.media_tablet} {
    font-size: 2.2rem;
    line-height: 3.4rem;
  }
`;

export const TitleStyled = styled(Text)`
  margin-top: 0.6rem !important;
  font-weight: 800;
  font-size: 6.4rem;
  line-height: 114.4%;

  @media ${devices.media_tablet} {
    font-size: 5rem;
    line-height: 114.4%;
  }
`;

export const CaptionStyled = styled(Text)`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.7rem;
  text-transform: capitalize;
  margin-top: 2.4rem !important;

  @media ${devices.media_tablet} {
    font-size: 1.6rem;
    line-height: 2.7rem;
  }
`;

export const AdvertisingImageStyled = styled(Image)`
  width: 100%;
  margin-top: 5rem;
  padding-bottom: 2rem;
`;
