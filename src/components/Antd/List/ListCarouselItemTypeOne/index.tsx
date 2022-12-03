import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatters, absNumber } from 'src/utils/numbers';

import {
  ContainerPageStyled,
  TransactionListStyled,
  InfoContainerStyled,
  InfoContentStyled,
  LeftColumnAboveStyled,
  RightColumnAboveStyled,
  LeftColumnBottomStyled,
  RightColumnBottomStyled,
  InfoDetailsStyled,
  TitleTransStyled,
  AmountStyled,
  TransferDateStyled,
  TypeTransStyled,
  StatusPendingStyled,
  BtnCancelStyled,
} from './styled';

interface ItemListDataTypeTwo {
  id: number;
  date: string;
  amount: number;
  description: string;
  type: string;
  typeDisplay?: string;
  statusGroup: string;
  statusDisplay: string;
}

const TYPE_NEGATIVE = ['sell', 'deposit'];

interface AntdListCarouselItemTypeOneProps {
  item: ItemListDataTypeTwo[];
  showModal: (item: ItemListDataTypeTwo) => void;
}

const AntdListCarouselItemTypeOne = (props: AntdListCarouselItemTypeOneProps) => {
  const { item, showModal } = props;
  const { t } = useTranslation(['commons']);
  return (
    <ContainerPageStyled>
      {item?.map((item: any, index: number) => (
        <TransactionListStyled key={index.toString()}>
          <InfoContainerStyled>
            <InfoContentStyled>
              <LeftColumnAboveStyled>
                <InfoDetailsStyled>
                  <TitleTransStyled>{item?.description || ''}</TitleTransStyled>
                  <TitleTransStyled>{item?.typeDisplay || ''}</TitleTransStyled>
                </InfoDetailsStyled>
              </LeftColumnAboveStyled>
              <RightColumnAboveStyled>
                <AmountStyled isNegative={TYPE_NEGATIVE?.includes(item?.type?.toLowerCase())}>
                  {item?.amount
                    ? TYPE_NEGATIVE?.includes(item?.type?.toLowerCase())
                      ? '+'
                      : '-'
                    : ''}
                  {formatters.currency.format(absNumber(item?.amount || 0))}
                </AmountStyled>
              </RightColumnAboveStyled>
            </InfoContentStyled>
            <InfoContentStyled>
              <LeftColumnBottomStyled>
                <TransferDateStyled>{item?.date || ''}</TransferDateStyled>
              </LeftColumnBottomStyled>
              <RightColumnBottomStyled>
                <TypeTransStyled>
                  <StatusPendingStyled>{item?.statusDisplay || ''}</StatusPendingStyled>
                </TypeTransStyled>
              </RightColumnBottomStyled>
            </InfoContentStyled>
          </InfoContainerStyled>
          <BtnCancelStyled onClick={() => showModal(item)}>{t('BUTTONS.CANCEL')}</BtnCancelStyled>
        </TransactionListStyled>
      ))}
    </ContainerPageStyled>
  );
};

export default AntdListCarouselItemTypeOne;
