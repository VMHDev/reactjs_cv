import React from 'react';
import { Spin } from 'antd';
import { SpinnerOverlayStyled } from './styled';

const AntdLoadingPage = () => {
  return (
    <SpinnerOverlayStyled>
      <Spin size="large" />
    </SpinnerOverlayStyled>
  );
};

export default AntdLoadingPage;
