import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { ROOT } from 'src/layout/constants/url';
import { navigateMenu } from 'src/layout/utils';

import DropdownMenu from 'src/layout/components/HeaderMain/NavBar/DropdownMenu';

import { IHeaderMenuItem, IMenuItemSubOne, IMenuItemSubTwo } from 'src/layout/types';
import Logo from 'src/assets/images/logo/LogoTransparent.png';
import {
  NavBarContainerStyled,
  LogoContainerStyled,
  LogoImageStyled,
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
  const history = useHistory();
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
    navigateMenu(item, history);
  };

  const handleClickLogo = () => {
    history.push(ROOT.DASHBOARD);
  };

  const handleNavigate = (item: IMenuItemSubOne | IMenuItemSubTwo) => {
    navigateMenu(item, history);
  };

  return (
    <NavBarContainerStyled>
      <LogoContainerStyled onClick={handleClickLogo}>
        <LogoImageStyled src={Logo} />
      </LogoContainerStyled>
      <NavBarStyled>
        {dataItemMenu?.map((item: IHeaderMenuItem) => (
          <NavItemStyled key={item.id}>
            <NavButtonStyled>
              <a
                className="navButton"
                onMouseEnter={() => handleMouseEnter(item)}
                onClick={() => handleItemClick(item)}
              >
                {t(item?.title)}
              </a>
            </NavButtonStyled>

            {activeIndex === item.id && item.subOne.length > 0 && isShowMenu && (
              <>
                <ArrowUpGreyStyled />
                <DropdownMenu
                  isShowDropDown={isShowMenu}
                  onClickOutside={() => setShow(false)}
                  onClickNavItem={() => setShow(item.subOne.length === 0)}
                  handleNavigate={handleNavigate}
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
