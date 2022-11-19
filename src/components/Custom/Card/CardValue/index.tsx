import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatters } from 'src/utils/numbers';

import DownRed from 'src/assets/icons/gui/DownRed.png';
import UpWhite from 'src/assets/icons/gui/UpWhite.png';
import {
  CardContainerStyled,
  TitleStyled,
  ValueMainContainerStyled,
  LoadingSpinMediumStyled,
  LoadingSpinSmallStyled,
  IconStyled,
  ValueMainStyled,
  ValueChangeContainerStyled,
  ValueChangeStyled,
} from './styled';

interface CardValueProps {
  isLoadingValue: boolean;
  valueMain: number;
  valueChange: number;
  onClick: () => void;
}

const CardValue = (props: CardValueProps) => {
  const { isLoadingValue, valueMain, valueChange, onClick } = props;
  const { t } = useTranslation(['dashboard']);

  return (
    <CardContainerStyled onClick={onClick}>
      <TitleStyled>{t('DASHBOARD.CARD_TITLE_1')}</TitleStyled>
      <ValueMainContainerStyled>
        {isLoadingValue ? (
          <LoadingSpinMediumStyled />
        ) : (
          <ValueMainStyled>{formatters.currency.format(valueMain)}</ValueMainStyled>
        )}
      </ValueMainContainerStyled>
      <ValueChangeContainerStyled>
        <IconStyled iconSource={valueChange < 0 ? DownRed : UpWhite} />
        {isLoadingValue ? (
          <LoadingSpinSmallStyled />
        ) : (
          <ValueChangeStyled>
            {`${formatters.percent.format(valueChange / 100)} ${t('DASHBOARD.LAST_DAYS')}`}
          </ValueChangeStyled>
        )}
      </ValueChangeContainerStyled>
    </CardContainerStyled>
  );
};

export default CardValue;
