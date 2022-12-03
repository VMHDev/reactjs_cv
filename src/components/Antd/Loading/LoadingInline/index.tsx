import React, { ReactElement } from 'react';
import { Spin } from 'antd';

import { LoadingIconStyled } from './styled';

export interface AntdLoadingInlineProps {
  className?: string;
  classNameIcon?: string;
  children?: ReactElement;
  spinning?: boolean;
}

const AntdLoadingInline = (props: AntdLoadingInlineProps) => {
  const { className = '', classNameIcon = '', spinning, children } = props;
  const antIcon = <LoadingIconStyled className={classNameIcon} spin />;

  return (
    <Spin indicator={antIcon} spinning={spinning} className={className}>
      {children}
    </Spin>
  );
};

export default AntdLoadingInline;
