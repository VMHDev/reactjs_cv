import React from 'react';
import { List } from 'antd';
import { useTranslation } from 'react-i18next';

import Empty from 'src/components/Antd/Empty';
import AntdSkeleton from 'src/components/Antd/Skeleton';

import { ContainerStyled, TitleStyled, BtnViewAllStyled } from './styled';

export interface ListViewAllProps {
  data: any[];
  renderItem: ((item: any, index: number) => React.ReactNode) | undefined;
  loading?: boolean;
  isScroll?: boolean;
  textTitle?: string;
  textNoData?: string;
  maxDataShow?: number;
  isShowViewAll?: boolean;
  buttonViewAll?: React.ReactNode;
  onClickViewAll?: () => void;
}

const ListViewAll = ({
  data,
  renderItem,
  isScroll,
  loading,
  textTitle,
  textNoData,
  maxDataShow = 5,
  isShowViewAll = false,
  buttonViewAll,
  onClickViewAll = () => null,
}: ListViewAllProps) => {
  const { t } = useTranslation(['commons']);
  return (
    <>
      {!loading && textTitle && <TitleStyled>{textTitle}</TitleStyled>}
      <ContainerStyled>
        <div className={isScroll ? 'container' : ''}>
          <AntdSkeleton loading={loading || false} />
          {!loading && data?.length > 0 && (
            <List
              dataSource={isShowViewAll ? data.slice(0, maxDataShow) : data}
              renderItem={renderItem}
            />
          )}
          {!loading && data?.length === 0 && <Empty content={textNoData} />}
          {!loading &&
            data?.length >= maxDataShow &&
            isShowViewAll &&
            (buttonViewAll ? (
              buttonViewAll
            ) : (
              <BtnViewAllStyled onClick={onClickViewAll}>{t('BUTTONS.VIEW_ALL')}</BtnViewAllStyled>
            ))}
        </div>
      </ContainerStyled>
    </>
  );
};

export default ListViewAll;
