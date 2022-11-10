import React, { memo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';

import { ROOT } from 'src/layout/constants/url';
import { MENU_ITEM } from 'src/layout/constants/menu';
import { THEME } from 'src/constants/commons';

import MenuItem from 'src/layout/components/ContainerMenuBar/MenuItem';

import DollarIcon from 'src/assets/icons/menu/DollarIcon.png';
import CreditIcon from 'src/assets/icons/menu/CreditIcon.png';
import InvestIcon from 'src/assets/icons/menu/InvestIcon.png';
import ServiceIcon from 'src/assets/icons/menu/ServiceIcon.png';
import UnifiGreenIcon from 'src/assets/icons/menu/UnifiGreenIcon.png';
import UnifiWhiteIcon from 'src/assets/icons/menu/UnifiWhiteIcon.png';

import {
  LayoutContainerStyled,
  ContentContainerStyled,
  MenuContainerStyled,
  MenuCenterContainerStyled,
  MenuItemStyled,
  IconItemStyled,
  ItemTextStyled,
} from './styled';

const ContainerMenuBar = () => {
  const { t } = useTranslation(['container']);
  const navigate = useNavigate();
  const stateTheme = THEME.DARK;

  const [valueMenu, setValueMenu] = useState('');

  useEffect(() => {
    if (window.location.pathname.includes(ROOT.DASHBOARD)) {
      setValueMenu(MENU_ITEM.DASHBOARD);
    } else if (window.location.pathname.includes(ROOT.INFORMATION)) {
      setValueMenu(MENU_ITEM.INFORMATION);
    } else if (window.location.pathname.includes(ROOT.SKILL)) {
      setValueMenu(MENU_ITEM.SKILL);
    } else if (window.location.pathname.includes(ROOT.PROJECT)) {
      setValueMenu(MENU_ITEM.PROJECT);
    }
  }, []);

  const handleInvestment = async () => {
    navigate(ROOT.DASHBOARD);
  };

  const gotoCashDetail = () => {
    navigate(ROOT.DASHBOARD);
  };

  return (
    <LayoutContainerStyled>
      <ContentContainerStyled theme={stateTheme}>
        <MenuContainerStyled>
          <MenuItem
            itemTitle={
              <MenuItemStyled>
                <IconItemStyled src={ServiceIcon} preview={false} />
                <ItemTextStyled>{t('MENU.ITEM_ONE')}</ItemTextStyled>
              </MenuItemStyled>
            }
          />
        </MenuContainerStyled>
        <MenuContainerStyled onClick={gotoCashDetail}>
          <MenuItemStyled>
            <div className={valueMenu == 'form' ? 'itemIconSelected' : ''}>
              <IconItemStyled src={DollarIcon} preview={false} />
            </div>
            <div className={`${'itemText'} ${valueMenu == 'form' ? 'itemTextSelected' : 'none'}`}>
              {t('MENU.ITEM_TWO')}
            </div>
          </MenuItemStyled>
        </MenuContainerStyled>
        <MenuCenterContainerStyled>
          <Image
            src={valueMenu == 'dashboard' ? UnifiGreenIcon : UnifiWhiteIcon}
            preview={false}
            className={valueMenu == 'dashboard' ? 'centerIconSelected' : 'centerIcon'}
            onClick={() => {
              navigate(ROOT.DASHBOARD);
            }}
          />
        </MenuCenterContainerStyled>
        <MenuContainerStyled>
          <MenuItemStyled>
            <IconItemStyled src={CreditIcon} preview={false} />
            <ItemTextStyled>{t('MENU.ITEM_THREE')}</ItemTextStyled>
          </MenuItemStyled>
        </MenuContainerStyled>
        <MenuContainerStyled onClick={handleInvestment}>
          <MenuItemStyled>
            <div className={valueMenu == 'process' ? 'itemIconSelected' : ''}>
              <IconItemStyled src={InvestIcon} preview={false} />
            </div>
            <div className={`${'itemText'} ${valueMenu == 'process' ? 'itemTextSelected' : ''}`}>
              {t('MENU.ITEM_FOUR')}
            </div>
          </MenuItemStyled>
        </MenuContainerStyled>
      </ContentContainerStyled>
    </LayoutContainerStyled>
  );
};
export default memo(ContainerMenuBar);
