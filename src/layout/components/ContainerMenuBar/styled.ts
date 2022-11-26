import styled from 'styled-components';

import { Image } from 'antd';
import { THEME } from 'src/constants/commons';

import colors from 'src/styles/variables/colors';
import fonts from 'src/styles/variables/fonts';
import devices from 'src/styles/variables/devices';

export const LayoutContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainerStyled = styled.div.attrs((props: any) => ({
  theme: props.theme || THEME.DARK,
}))`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  color: ${colors.color_white};
  font-size: ${fonts.font_size_normal};
  font-weight: ${fonts.font_weight_normal};
  line-height: ${fonts.font_line_height_normal};

  height: 5.6rem;
  width: 81.8rem;
  border-radius: 2.5rem;

  margin-top: 5%;
  margin-bottom: 2%;

  background: ${(props) =>
    props.theme === THEME.DARK
      ? `linear-gradient(${colors.color_gray_mid}, ${colors.color_black})`
      : `linear-gradient(${colors.color_gray_light}, ${colors.color_black})`};

  @media ${devices.media_mobile_tablet} {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

export const MenuContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0rem;

  &:hover {
    cursor: pointer;
    color: var(--color_main);
    .iconItem {
      filter: invert(79%) sepia(10%) saturate(2547%) hue-rotate(40deg) brightness(92%) contrast(85%);
    }
  }
`;

export const MenuCenterContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: var(--color_green);
    .centerIcon {
      filter: invert(79%) sepia(10%) saturate(2547%) hue-rotate(40deg) brightness(92%) contrast(85%);
    }
  }
`;

export const MenuItemStyled = styled.div`
  display: flex;
`;

export const IconItemStyled = styled(Image)`
  width: 3.3rem !important;
  height: 2.3rem !important;
  margin-right: 0.5rem;
  align-self: center;
  align-items: center;
`;

export const ItemIconSelectedStyled = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  background-color: var(--color_main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  bottom: 2rem;
  margin-top: -2.5rem;
  margin-right: 0.5rem;
`;

export const ItemTextStyled = styled.div`
  @include isTablet() {
    display: none;
  }
`;

export const ItemTextSelectedStyled = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0rem;
  cursor: pointer;
  color: var(--color_green);
`;

export const CenterIconSelectedStyled = styled.div`
  position: relative;
  width: 6rem !important;
  height: 6rem !important;
  bottom: 2rem;
  cursor: pointer;
`;
