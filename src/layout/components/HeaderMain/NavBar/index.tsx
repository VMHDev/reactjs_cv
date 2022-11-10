import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROOT } from 'src/layout/constants/url';
import { MENU_ITEM_ID } from 'src/layout/constants/menu';
import { navigateMenu } from 'src/layout/utils';

import DropdownMenu from 'src/layout/components/HeaderMain/NavBar/DropdownMenu';
import Image from 'src/components/Custom/Image';

import { IHeaderMenuItem } from 'src/layout/types';
import Logo from 'src/assets/images/logo/LogoTransparent.png';
import {
  NavBarContainerStyled,
  LogoContainerStyled,
  NavBarStyled,
  NavItemStyled,
  NavButtonStyled,
  ArrowUpGreyStyled,
} from './styled';

interface NavLoggedHeaderProps {
  dataItemMenu: IHeaderMenuItem[];
}

const NavBar = (props: NavLoggedHeaderProps) => {
  const { dataItemMenu } = props;
  const navigate = useNavigate();
  const { t } = useTranslation(['layout']);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isShowMenu, setShow] = useState(false);

  const handleMouseEnter = (item: IHeaderMenuItem) => {
    setActiveIndex(item.id);
    setShow(true);
  };

  const handleItemClick = (item: IHeaderMenuItem) => {
    setActiveIndex(item.id);
    setShow(!isShowMenu);
    navigateMenu(item);
  };

  const handleClickLogo = () => {
    navigate(ROOT.DASHBOARD);
  };

  return (
    <NavBarContainerStyled>
      <LogoContainerStyled onClick={handleClickLogo}>
        <Image src={Logo} className="logoImage" />
      </LogoContainerStyled>
      <NavBarStyled>
        {dataItemMenu?.map((item: IHeaderMenuItem) => (
          <NavItemStyled key={item.id}>
            <NavButtonStyled
              className={item?.id === MENU_ITEM_ID.NONE_AUTH_CONTACT ? 'navButtonBox' : 'navButton'}
              onMouseEnter={() => handleMouseEnter(item)}
              onClick={() => handleItemClick(item)}
            >
              {t(item?.title)}
            </NavButtonStyled>

            {activeIndex === item.id && item.subOne.length > 0 && isShowMenu && (
              <>
                <ArrowUpGreyStyled />
                <DropdownMenu
                  isShowDropDown={isShowMenu}
                  onClickOutside={() => setShow(false)}
                  onClickNavItem={() => setShow(item.subOne.length === 0)}
                  handleNavigate={navigateMenu}
                  data={item.subOne}
                />
              </>
            )}
          </NavItemStyled>
        ))}
      </NavBarStyled>
    </NavBarContainerStyled>
  );
};

export default NavBar;
