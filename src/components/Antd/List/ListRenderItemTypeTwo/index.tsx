import React from 'react';

import colors from 'src/styles/variables/colors';
import { formatters, absNumber } from 'src/utils/numbers';

import {
  TransactionListStyled,
  CircleStyled,
  BarChartStyled,
  InfoContainerStyled,
  InfoContentStyled,
  LeftColumnAboveStyled,
  InfoDetailsStyled,
  TitleTransStyled,
  TransferDateStyled,
  StatusStyled,
  AmountStyled,
  LeftColumnBottomStyled,
  RightColumnBottomStyled,
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

export const STATUS_GROUP = {
  COMPLETED: 'completed',
  CANCELED: 'canceled',
  PENDING: 'pending',
  FAILED: 'failed',
  ALL: 'all',
};

interface ListRenderItemTypeTwoProps {
  item: ItemListDataTypeTwo;
  index: number;
}

const ListRenderItemTypeTwo = (props: ListRenderItemTypeTwoProps) => {
  const { item, index } = props;
  return (
    <TransactionListStyled key={index.toString()}>
      <CircleStyled isNegative={TYPE_NEGATIVE?.includes(item?.type?.toLowerCase())}>
        <BarChartStyled
          color={
            TYPE_NEGATIVE?.includes(item?.type?.toLowerCase())
              ? colors.color_green
              : colors.color_red
          }
        />
      </CircleStyled>

      <InfoContainerStyled>
        <InfoContentStyled>
          <LeftColumnAboveStyled>
            <InfoDetailsStyled>
              <TitleTransStyled>
                {`${item?.description || ''} ${item?.typeDisplay || ''} 
                ${item?.id ? `(${item?.id})` : ''}`}
              </TitleTransStyled>
            </InfoDetailsStyled>
          </LeftColumnAboveStyled>
          <RightColumnBottomStyled>
            <AmountStyled>
              {item?.amount ? (TYPE_NEGATIVE?.includes(item?.type?.toLowerCase()) ? '+' : '-') : ''}
              {formatters.currency.format(absNumber(item?.amount || 0))}
            </AmountStyled>
          </RightColumnBottomStyled>
        </InfoContentStyled>
        <InfoContentStyled>
          <LeftColumnBottomStyled>
            <TransferDateStyled>{item?.date || ''}</TransferDateStyled>
          </LeftColumnBottomStyled>
          <RightColumnBottomStyled>
            <TitleTransStyled>
              <StatusStyled statusGroup={item?.statusGroup}>
                {item?.statusDisplay || ''}
              </StatusStyled>
            </TitleTransStyled>
          </RightColumnBottomStyled>
        </InfoContentStyled>
      </InfoContainerStyled>
    </TransactionListStyled>
  );
};

export default ListRenderItemTypeTwo;
