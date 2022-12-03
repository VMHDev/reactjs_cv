import React from 'react';

import colors from 'src/styles/variables/colors';
import { ProgressStyled } from './styled';

interface AntdProgressProps {
  percent: number;
  strokeWidth: number;
  strokeColor: string;
}

const AntdProgress = (props: AntdProgressProps) => {
  const { percent, strokeWidth = 15, strokeColor = colors.color_blue } = props;
  return <ProgressStyled percent={percent} strokeWidth={strokeWidth} strokeColor={strokeColor} />;
};

export default AntdProgress;
