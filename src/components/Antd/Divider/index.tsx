import React from 'react';
import { Divider } from 'antd';

import { DividerStyled } from './styled';

const AntdDivider = ({ ...props }: React.ComponentProps<typeof Divider>) => {
  return <DividerStyled {...props} />;
};

export default AntdDivider;
