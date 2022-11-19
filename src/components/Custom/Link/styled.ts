import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';

export const LinkStyled = styled.a`
  cursor: pointer;
  color: ${colors.color_main};
  font-size: ${fonts.font_size_normal};
  font-weight: ${fonts.font_weight_normal};
  line-height: ${fonts.font_line_height_normal};
`;
