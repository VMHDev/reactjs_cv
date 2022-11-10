import styled from 'styled-components';
import colors from 'src/styles/variables/colors';
import fonts from 'src/styles/variables/fonts';

export const MenuContainerStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 500ms;
  padding: 1rem 1rem;
  border-bottom: 0.1rem solid ${colors.color_white_light};
`;

export const MenuItemStyled = styled.a`
  font-size: ${fonts.font_size_small};
  font-weight: ${fonts.font_weight_normal};
  line-height: ${fonts.font_line_height_small};
  color: ${colors.color_gray_dark};
  &:hover {
    font-size: ${fonts.font_size_small};
    font-weight: ${fonts.font_weight_normal};
    color: ${colors.color_green};
  }
`;
