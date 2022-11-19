import React from 'react';
import { Spin } from 'antd';
import { SpinnerOverlayStyled } from './styled';

const LoadingPage = () => {
  return (
    <SpinnerOverlayStyled>
      <Spin size="large" />
    </SpinnerOverlayStyled>
  );
};

export default LoadingPage;
