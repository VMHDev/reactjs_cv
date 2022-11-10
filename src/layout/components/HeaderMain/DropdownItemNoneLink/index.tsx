import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { setTheme, setLanguage } from 'src/layout/redux/layoutSlice';

import { LANGUAGE, THEME } from 'src/constants/commons';
import { MENU_ITEM_ID } from 'src/layout/constants/menu';

import { SubLinkStyled } from './styled';

interface DropdownItemNoneLinkProps {
  subId: number;
  subTitle: string;
}

const DropdownItemNoneLink = ({ subId, subTitle }: DropdownItemNoneLinkProps) => {
  const { t } = useTranslation(['layout']);
  const dispatch = useAppDispatch();

  const stateTheme = useAppSelector((state) => state?.layout?.theme);
  const stateLanguage = useAppSelector((state) => state?.layout?.language);

  const onClickChangeTheme = async () => {
    const theme = stateTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    dispatch(setTheme(theme));
  };

  const onClickChangeLanguage = async () => {
    const language = stateLanguage === LANGUAGE.EN ? LANGUAGE.VI : LANGUAGE.EN;
    dispatch(setLanguage(language));
  };

  const RenderGUIChangeTheme = () => {
    const content = stateTheme === THEME.DARK ? t('MENU.SYSTEM.LIGHT') : t('MENU.SYSTEM.DARK');
    return <SubLinkStyled onClick={onClickChangeTheme}>{content}</SubLinkStyled>;
  };

  const RenderGUIChangeLanguage = () => {
    const content =
      stateLanguage === LANGUAGE.EN ? t('MENU.SYSTEM.LANGUGE_VI') : t('MENU.SYSTEM.LANGUAGE_EN');
    return <SubLinkStyled onClick={onClickChangeLanguage}>{content}</SubLinkStyled>;
  };

  switch (subId) {
    case MENU_ITEM_ID.SYSTEM_CHANGE_TO_LIGHT_MODE:
      return <RenderGUIChangeTheme />;
    case MENU_ITEM_ID.SYSTEM_CHANGE_LANGUAGE:
      return <RenderGUIChangeLanguage />;
    default:
      return <span>{t(subTitle)}</span>;
  }
};

export default DropdownItemNoneLink;
