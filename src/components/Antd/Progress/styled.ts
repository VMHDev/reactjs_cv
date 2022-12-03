import styled from 'styled-components';
import { Progress } from 'antd';

import colors from 'src/styles/variables/colors';

export const ProgressStyled = styled(Progress)`
  .ant-progress-inner {
    background-color: ${colors.color_gray};
  }
`;
