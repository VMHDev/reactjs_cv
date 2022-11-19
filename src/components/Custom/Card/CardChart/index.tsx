import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatters } from 'src/utils/numbers';

import DownRed from 'src/assets/icons/gui/DownRed.png';
import UpGreen from 'src/assets/icons/gui/UpGreen.png';
import ChartUp from 'src/assets/icons/gui/ChartUp.png';
import ChartDown from 'src/assets/icons/gui/ChartDown.png';
import ChartLine from 'src/assets/icons/gui/ChartLine.png';
import {
  CardContainerStyled,
  CardInfoStyled,
  TitleStyled,
  DescStyled,
  ValueMainContainerStyled,
  ValueMainStyled,
  LoadingSpinMediumStyled,
  LoadingSpinSmallStyled,
  ValueChangeContainerStyled,
  ValueChangeStyled,
  IconStyled,
  ChartStyled,
} from './styled';

interface CartChartProps {
  isLoadingValue: boolean;
  valueMain: number;
  valueChange: number;
  onClick: () => void;
}

const CartChart = (props: CartChartProps) => {
  const { isLoadingValue, valueMain, valueChange, onClick } = props;
  const { t } = useTranslation(['dashboard']);

  return (
    <CardContainerStyled onClick={onClick}>
      <CardInfoStyled>
        <TitleStyled>{t('DASHBOARD.CARD_TITLE_3')}</TitleStyled>
        <DescStyled>{t('DASHBOARD.CARD_DESC_3')}</DescStyled>
      </CardInfoStyled>
      <CardInfoStyled>
        <ValueMainContainerStyled>
          {isLoadingValue ? (
            <LoadingSpinMediumStyled />
          ) : (
            <ValueMainStyled>{formatters.currency.format(valueMain)}</ValueMainStyled>
          )}
        </ValueMainContainerStyled>

        <ValueChangeContainerStyled>
          <IconStyled iconSource={valueChange < 0 ? DownRed : UpGreen} />
          {isLoadingValue ? (
            <LoadingSpinSmallStyled />
          ) : (
            <ValueChangeStyled>
              {`${formatters.percent.format(valueChange / 100)} ${t('DASHBOARD.LAST_DAYS')}`}
            </ValueChangeStyled>
          )}
        </ValueChangeContainerStyled>
      </CardInfoStyled>
      <ChartStyled src={valueChange < 0 ? ChartDown : valueChange > 0 ? ChartUp : ChartLine} />
    </CardContainerStyled>
  );
};

export default CartChart;
