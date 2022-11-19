import styled from 'styled-components';
import colors from 'src/styles/variables/colors';
import devices from 'src/styles/variables/devices';
import layouts from 'src/styles/variables/layouts';

import { Skeleton } from 'antd';
import Text from 'src/components/Custom/Text';

export const ContainerStyled = styled.div`
  height: ${layouts.height_list_scroll_desktop};
  overflow: auto;
  padding: 0.5rem;

  @media ${devices.media_tablet} {
    height: ${layouts.height_list_scroll_tablet};
  }

  @media ${devices.media_mobile} {
    height: ${layouts.height_list_scroll_mobile};
  }

  ::-webkit-scrollbar {
    width: 0em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px transparent;
    padding-left: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    outline: none;
  }

  :global {
    .ant-empty {
      color: ${colors.color_white};
    }
  }
`;

export const TextScrollEndStyled = styled(Text)`
  text-align: center;
  padding-top: 2rem;
`;

export const SkeletonStyled = styled(Skeleton)`
  margin-top: 2rem;
`;
