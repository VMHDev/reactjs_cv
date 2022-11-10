import React from 'react';
import HeaderMain from 'src/layout/components/HeaderMain';

const LayoutMain = ({ children }: any) => {
  return (
    <>
      <HeaderMain />
      {children}
    </>
  );
};
export default LayoutMain;
