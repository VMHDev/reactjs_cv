import styled from 'styled-components';
import colors from 'src/styles/variables/colors';

export const SubLinkStyled = styled.span`
  color: ${colors.color_gray_dark};

  &:hover {
    color: ${colors.color_green};
  }
`;
