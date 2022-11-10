import React, { useState, useEffect, useRef } from 'react';
import { Grid } from 'antd';
import { useNavigate } from 'react-router-dom';

import { ROOT } from 'src/layout/constants/url';
import DropdownMenuMobile from 'src/layout/components/HeaderMain/NavBarMobile/DropdownMenuMobile';

import { IHeaderMenuItem } from 'src/layout/types';
import Logo from 'src/assets/images/logo/LogoTransparent.png';
import MenuIcon from 'src/assets/icons/layout/MenuIcon.png';
import CloseNavIcon from 'src/assets/icons/layout/CloseNav.png';
import {
  ContainerStyled,
  ContainerLogoStyled,
  LogoPageStyled,
  ContainerIconStyled,
  IconMenuStyled,
} from './styled';

const { useBreakpoint } = Grid;

interface NewMobileNavProps {
  dataMenu: IHeaderMenuItem[];
}

const NavBarMobile = ({ dataMenu }: NewMobileNavProps) => {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const refTransition = useRef<any>(null);

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (refTransition.current && !refTransition.current.contains(event.target)) {
        setIsOpenDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const changeIconMenu = () => {
    let icon = '';
    icon = !isOpenDropdown ? MenuIcon : CloseNavIcon;
    return icon;
  };

  const onClickLogo = () => {
    navigate(ROOT.DASHBOARD);
  };

  const onClickMenu = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <>
      <ContainerStyled>
        <ContainerLogoStyled
          style={{ width: screens.xs === true ? '62.6%' : '57.4%' }}
          onClick={onClickLogo}
        >
          <LogoPageStyled src={Logo} className="logoPage" />
        </ContainerLogoStyled>
        <ContainerIconStyled>
          <IconMenuStyled
            className="iconMenu"
            iconSource={changeIconMenu()}
            onClick={onClickMenu}
          />
        </ContainerIconStyled>
      </ContainerStyled>
      {isOpenDropdown && (
        <DropdownMenuMobile
          dataMain={dataMenu}
          refTransition={refTransition}
          setIsOpenDropdown={setIsOpenDropdown}
        />
      )}
    </>
  );
};

export default NavBarMobile;
