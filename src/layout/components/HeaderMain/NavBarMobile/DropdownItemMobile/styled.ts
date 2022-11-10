import styled from 'styled-components';
import colors from 'src/styles/variables/colors';
import fonts from 'src/styles/variables/fonts';

export const NavItemStyled = styled.div`
  display: flex;
  padding: 2rem;
  cursor: pointer;
`;

export const NavSubStyled = styled.div.attrs((props: any) => ({
  isSelected: props.isSelected,
}))`
  font-size: ${fonts.font_size_small};
  font-weight: ${fonts.font_weight_small};
  margin-right: 1rem;

  color: ${(props) => (props.isSelected ? colors.color_green : colors.color_gray_dark)};
`;

export const BottomLineStyled = styled.div`
  background-color: ${colors.color_white};
  height: 0.1rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;
