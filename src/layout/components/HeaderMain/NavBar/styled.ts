import styled from 'styled-components';
import colors from 'src/styles/variables/colors';
import layouts from 'src/styles/variables/layouts';
import devices from 'src/styles/variables/devices';
import fonts from 'src/styles/variables/fonts';

import Image from 'src/components/Custom/Image';

export const NavBarContainerStyled = styled.div`
  height: ${layouts.header_height_desktop};
  background-color: ${colors.color_white_light};
  position: sticky;
  top: 0;
  font-size: ${fonts.font_size_normal};
  z-index: 3;
  display: flex;
  width: 100%;

  @media ${devices.media_mobile} {
    display: none;
  }

  @media ${devices.media_tablet} {
    height: ${layouts.header_height_tablet};
  }
`;

export const LogoContainerStyled = styled.div`
  border-top: ${layouts.header_height_desktop} solid ${colors.color_main};
  border-right: 6rem solid transparent;
  width: 30%;
  text-align: center;
  content: '';

  @media ${devices.media_tablet} {
    width: 26%;
    border-top: ${layouts.header_height_tablet} solid ${colors.color_main};
  }
`;

export const LogoImageStyled = styled(Image)`
  position: absolute;
  left: 10rem;
  top: 2rem;
  cursor: pointer;
  width: 14.6rem;
  height: 3.4rem;

  @media ${devices.media_tablet} {
    top: 1rem;
    left: 4rem;
    width: 10.8rem;
    height: 2.5rem;
  }
`;

export const NavBarStyled = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  right: 10rem;

  @media ${devices.media_tablet} {
    right: 4rem;
    max-width: 70%;
  }
`;

export const NavItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
`;

export const NavButtonStyled = styled.div`
  .navButton {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.color_gray_dark};
    font-size: ${fonts.font_size_normal};
    font-weight: ${fonts.font_weight_medium};

    @media ${devices.media_tablet} {
      font-size: ${fonts.font_size_small};
    }

    &:hover {
      color: ${colors.color_green};
      font-size: ${fonts.font_size_normal};
      font-weight: ${fonts.font_weight_medium};

      @media ${devices.media_tablet} {
        font-size: ${fonts.font_size_small};
      }
    }
  }
  .navButtonBox {
    width: 14.1rem;
    padding: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: ${colors.color_gray_dark};
    background-color: ${colors.color_yellow};
    font-size: ${fonts.font_size_normal};
    border-radius: 0.6rem;
    font-weight: ${fonts.font_weight_medium};

    @media ${devices.media_tablet} {
      font-size: ${fonts.font_size_small};
    }

    &:hover {
      color: ${colors.color_gray_dark};
      font-size: ${fonts.font_size_normal};
      font-weight: ${fonts.font_weight_medium};

      @media ${devices.media_tablet} {
        font-size: ${fonts.font_size_small};
      }
    }
  }
`;

export const ArrowUpGreyStyled = styled.div`
  position: absolute;
  top: 5.6rem;
  right: 5;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 0.8rem;
  height: 0.8rem;
  border: 0 solid ${colors.color_gray_light};
  border-width: 0.1rem 0 0 0.1rem;
  background: ${colors.color_white};
  z-index: 2000;

  @media ${devices.media_tablet} {
    top: 3.6rem;
  }
`;
