import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatters } from 'src/utils/numbers';

import ChartUp from 'src/assets/icons/gui/ChartUp.png';
import ChartDown from 'src/assets/icons/gui/ChartDown.png';
import ChartLine from 'src/assets/icons/gui/ChartLine.png';
import DownRed from 'src/assets/icons/gui/DownRed.png';
import UpGreen from 'src/assets/icons/gui/UpGreen.png';
import RightArrowGreen from 'src/assets/icons/gui/RightArrowGreen.png';
import CloseGreen from 'src/assets/icons/gui/CloseGreen.png';
import {
  CardContainerStyled,
  TitleStyled,
  DescStyled,
  ContainerContentStyled,
  IconChartStyled,
  ValueContainerStyled,
  ValueMainContainerStyled,
  LoadingSpinMediumStyled,
  ValueMainStyled,
  ValueChangeContainerStyled,
  IconStyled,
  ValueChangeStyled,
  IconCollapseStyled,
  ArrowIconStyled,
} from './styled';

interface CardCollapsePanelProps {
  isCollapsed: boolean;
  isLoadingValue: boolean;
  valueMain: number;
  valueChange: number;
}

const CardCollapsePanel = (props: CardCollapsePanelProps) => {
  const { isCollapsed, isLoadingValue, valueMain, valueChange } = props;
  const { t } = useTranslation(['dashboard']);

  return (
    <CardContainerStyled>
      <div>
        <TitleStyled>{t('DASHBOARD.CARD_TITLE_2')}</TitleStyled>
        <DescStyled>{t('DASHBOARD.CARD_DESC_2')}</DescStyled>
      </div>
      <ContainerContentStyled>
        <IconChartStyled
          iconSource={valueChange < 0 ? ChartDown : valueChange > 0 ? ChartUp : ChartLine}
        />
        <ValueContainerStyled>
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
              <LoadingSpinMediumStyled />
            ) : (
              <ValueChangeStyled>
                {`${formatters.percent.format(valueChange / 100)} ${t('DASHBOARD.LAST_DAYS')}`}
              </ValueChangeStyled>
            )}
          </ValueChangeContainerStyled>
        </ValueContainerStyled>
        <IconCollapseStyled>
          <ArrowIconStyled iconSource={isCollapsed ? CloseGreen : RightArrowGreen} />
        </IconCollapseStyled>
      </ContainerContentStyled>
    </CardContainerStyled>
  );
};

export default CardCollapsePanel;
