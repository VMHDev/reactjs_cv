import styled from 'styled-components';
import colors from 'src/styles/variables/colors';
import { Menu } from 'antd';

export const MyLinkStyled = styled.div`
  .navLink {
    color: ${colors.color_white};
  }
  .navLink:hover {
    color: ${colors.color_green};
  }
`;

export const MenuDividerStyled = styled(Menu.Divider)`
  margin-top: 1.5rem !important;
  background-color: ${colors.color_gray_dark} !important;
`;
