import React from 'react';

import DropdownItemNoneLink from 'src/layout/components/HeaderMain/DropdownItemNoneLink';

import { NavItemStyled, NavSubStyled, BottomLineStyled } from './styled';

interface NavBarMobileSubProps {
  subId: number;
  subTitle: string;
  activeItem?: boolean;
  arrowNext?: React.ReactNode;
  onClickItem?: () => void;
}

const NavBarMobileSub = (props: NavBarMobileSubProps) => {
  const { subId, subTitle, activeItem, arrowNext, onClickItem } = props;

  return (
    <>
      <NavItemStyled onClick={onClickItem}>
        <NavSubStyled isSelected={activeItem}>
          <DropdownItemNoneLink subId={subId} subTitle={subTitle} />
          {arrowNext}
        </NavSubStyled>
      </NavItemStyled>
      <BottomLineStyled />
    </>
  );
};

export default NavBarMobileSub;
