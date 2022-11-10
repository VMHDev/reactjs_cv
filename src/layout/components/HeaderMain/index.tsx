import React from 'react';
import { MENU_WITHOUT_AUTH } from 'src/layout/constants/menu';
import NavBar from 'src/layout/components/HeaderMain/NavBar';
import NavBarMobile from 'src/layout/components/HeaderMain/NavBarMobile';

const HeaderMain = () => {
  return (
    <>
      <NavBar dataItemMenu={MENU_WITHOUT_AUTH} />
      <NavBarMobile dataMenu={MENU_WITHOUT_AUTH} />
    </>
  );
};

export default HeaderMain;
