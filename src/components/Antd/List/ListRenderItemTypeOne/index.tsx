import React from 'react';
import { List } from 'antd';
import { useNavigate } from 'react-router-dom';
import { formatters } from 'src/utils/numbers';

import {
  ListItemStyled,
  IconStyled,
  TitleItemStyled,
  TextGrayStyled,
  TextDarkStyled,
  ListItemTextStyled,
  TextStyled,
} from './styled';

interface ItemListDataTypeOne {
  symbol: string;
  name: string;
  images: string;
  price: number;
  priceChange: number;
  priceChangePercent: number;
}

interface ListRenderItemTypeOneProps {
  item: ItemListDataTypeOne;
  index: number;
}

const ListRenderItemTypeOne = ({ item, index }: ListRenderItemTypeOneProps) => {
  const navigate = useNavigate();
  const gotoEquitiesDetail = () => {
    navigate({
      pathname: '/invest/equities/stock-detail',
      search: `?stock=${item?.symbol || ''}`,
    });
  };

  return (
    <ListItemStyled key={index} onClick={gotoEquitiesDetail}>
      <List.Item.Meta
        avatar={
          <IconStyled
            linkImage={`https://unifimoney-upload-image.s3.us-west-1.amazonaws.com/instruments/${item.symbol}.png`}
          />
        }
        title={<TitleItemStyled>{item?.symbol || ''}</TitleItemStyled>}
        description={<TextGrayStyled>{item?.name || ''}</TextGrayStyled>}
      />
      <TextDarkStyled>
        <ListItemTextStyled>
          {`$${formatters.twoDecimal.format(item?.price || 0)}`}
        </ListItemTextStyled>
        <br />
        <TextStyled value={item?.priceChange || 0}>
          {formatters.currency.format(item?.priceChange || 0)}
        </TextStyled>
        <TextStyled value={item?.priceChange || 0}>
          {` (${formatters.percent.format(item?.priceChangePercent / 100 || 0)})`}
        </TextStyled>
      </TextDarkStyled>
    </ListItemStyled>
  );
};

export default ListRenderItemTypeOne;
