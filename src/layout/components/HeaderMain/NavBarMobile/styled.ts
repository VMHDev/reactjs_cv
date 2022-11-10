import styled from 'styled-components';
import devices from 'src/styles/variables/devices';
import layouts from 'src/styles/variables/layouts';
import colors from 'src/styles/variables/colors';

import Image from 'src/components/Custom/Image';
import Icon from 'src/components/Custom/Icon';

export const ContainerStyled = styled.div`
  display: none;

  @media ${devices.media_mobile} {
    display: flex;
    height: ${layouts.header_height_mobile};
    background-color: ${colors.color_white_light};
    position: sticky;
    z-index: 1000;
    top: 0;
    width: 100%;
  }
`;

export const ContainerLogoStyled = styled.div`
  display: none;

  @media ${devices.media_mobile} {
    display: flex;
    border-top: ${layouts.header_height_mobile} solid ${colors.color_main};
    border-right: 4.8rem solid transparent;
    text-align: center;
    content: '';
  }
`;

export const LogoPageStyled = styled(Image)`
  .logoPage {
    position: absolute;
    left: 2rem;
    top: 1rem;
    width: 10.8rem;
    height: 2.5rem;
    cursor: pointer;
  }
`;

export const ContainerIconStyled = styled.div`
  display: none;

  @media ${devices.media_mobile} {
    display: flex;
    border-bottom: 4.8rem solid ${colors.color_white_light};
    border-left: 2rem solid transparent;
    content: '';
  }
`;

export const IconMenuStyled = styled(Icon)`
  .iconMenu {
    display: none;

    @media ${devices.media_mobile} {
      display: block;
      width: 3.6rem;
      height: 3.6rem;
      position: absolute;
      right: 2rem;
      top: 0.5rem;
      cursor: pointer;
    }
  }
`;
