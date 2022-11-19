import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';

import { LoadingOutlined } from '@ant-design/icons';

export const LoadingIconStyled = styled(LoadingOutlined)`
  font-size: ${fonts.font_size_xxxl};
  color: ${colors.color_main};
`;
