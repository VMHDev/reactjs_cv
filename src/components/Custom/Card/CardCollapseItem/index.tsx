import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { formatters } from 'src/utils/numbers';

import {
  ContainerLayoutStyled,
  ContainerContentStyled,
  ColLeftStyled,
  ColRightStyled,
  TitleStyled,
  ValueMainStyled,
  ValueChangeStyled,
  IconStyled,
} from './styled';

interface CardCollapseItemProps {
  title: string;
  valueMain: number;
  valueChange: number;
  icon: any;
  onClick: () => void;
}

const CardCollapseItem = (props: CardCollapseItemProps) => {
  const { valueMain, title, valueChange, icon, onClick } = props;
  const { t } = useTranslation(['dashboard']);

  return (
    <ContainerLayoutStyled>
      <ContainerContentStyled onClick={onClick}>
        <ColLeftStyled>
          <TitleStyled>{title}</TitleStyled>
        </ColLeftStyled>
        <ColRightStyled>
          <ValueMainStyled>{formatters.currency.format(valueMain || 0)}</ValueMainStyled>
          <ValueChangeStyled isDown={valueChange < 0} isUp={valueChange > 0}>
            <IconStyled iconSource={icon} />
            {`${formatters.percent.format(valueChange / 100)} ${t('DASHBOARD.LAST_DAYS')}`}
          </ValueChangeStyled>
        </ColRightStyled>
      </ContainerContentStyled>
    </ContainerLayoutStyled>
  );
};
export default memo(CardCollapseItem);
