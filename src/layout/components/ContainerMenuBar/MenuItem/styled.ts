import styled from 'styled-components';
import colors from 'src/styles/variables/colors';
import devices from 'src/styles/variables/devices';
import { Dropdown } from 'antd';

export const DropdownStyled = styled(Dropdown)`
  .container {
    width: 18.5rem;
    @media ${devices.media_mobile} {
      width: 20rem;
    }

    .ant-dropdown-menu {
      background-color: ${colors.color_gray_mid};
      border-radius: 1rem;
      @media ${devices.media_tablet} {
        margin: 1.4rem -1.2rem;
      }
      @media ${devices.media_mobile} {
        margin: 1.2rem -1.2rem;
      }
      @media ${devices.media_mobile} {
        width: 16rem;
      }
    }
  }
`;
