import React, { ReactElement } from 'react';
import { Spin } from 'antd';

import { LoadingIconStyled } from './styled';

export interface LoadingInlineProps {
  className?: string;
  classNameIcon?: string;
  children?: ReactElement;
  spinning?: boolean;
}

const LoadingInline = (props: LoadingInlineProps) => {
  const { className = '', classNameIcon = '', spinning, children } = props;
  const antIcon = <LoadingIconStyled className={classNameIcon} spin />;

  return (
    <Spin indicator={antIcon} spinning={spinning} className={className}>
      {children}
    </Spin>
  );
};

export default LoadingInline;
