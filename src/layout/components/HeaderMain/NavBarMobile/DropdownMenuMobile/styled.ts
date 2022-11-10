import styled from 'styled-components';
import devices from 'src/styles/variables/devices';
import colors from 'src/styles/variables/colors';
import fonts from 'src/styles/variables/fonts';

import Icon from 'src/components/Custom/Icon';

export const DropdownContainerStyled = styled.div`
  display: none;

  @media ${devices.media_mobile} {
    display: block;
    position: absolute;
    width: 50%;
    right: 0;
  }
`;

export const DropdownContentStyled = styled.div`
  display: none;

  @media ${devices.media_mobile} {
    display: block;
    position: relative;
    background-color: ${colors.color_white_light};
    clip-path: polygon(0 0, 130% 0, 100% 100%, 0 calc(100% - 8vw));
    z-index: 4000;
  }
`;

export const NavItemStyled = styled.div`
  display: flex;
  padding: 2rem;
  cursor: pointer;
`;

export const NavLinkStyled = styled.div.attrs((props: any) => ({
  isActive: props.isActive,
}))`
  font-size: ${fonts.font_size_small};
  font-weight: ${fonts.font_weight_small};

  color: ${(props) => (props.isActive ? colors.color_green : colors.color_gray_dark)};
`;

export const NextArrowStyled = styled(Icon)`
  .nextArrow {
    width: 1.8rem;
    height: 1.8rem;
    right: 1.5rem;
    position: absolute;
  }
`;

export const BottomLineStyled = styled.div`
  background-color: ${colors.color_white};
  height: 0.1rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const BackArrowStyled = styled(Icon)`
  .backArrow {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1.8rem;
    margin-top: 2rem;
    cursor: pointer;
  }
`;
