import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useDetectDevice } from 'src/utils/hooks';
import Empty from 'src/components/Antd/Empty';
import SkeletonCustom from 'src/components/Antd/Skeleton';

import layouts from 'src/styles/variables/layouts';
import { ContainerStyled, SkeletonStyled, TextScrollEndStyled } from './styled';

export interface ListScrollingLoadProps {
  data: any[];
  numberItemShow?: number;
  timeoutLoad?: number;
  loading?: boolean;
  contentEmptyData?: string;
  disableTextEndList?: boolean;
  renderItem: ((item: any, index: number) => React.ReactNode) | undefined;
}

const ListScrollingLoad = (props: ListScrollingLoadProps) => {
  const {
    data,
    numberItemShow = 15,
    timeoutLoad = 2000,
    loading,
    contentEmptyData,
    renderItem,
    disableTextEndList,
  } = props;
  const { t } = useTranslation(['commons']);
  const { isMobile, isTablet } = useDetectDevice();
  const [count, setCount] = useState({
    prev: 0,
    next: numberItemShow,
  });
  const [hasMore, setHasMore] = useState(true);
  const [dataRoot, setDataRoot] = useState(data);
  const [currentData, setCurrentData] = useState(
    dataRoot && dataRoot?.length ? dataRoot?.slice(count.prev, count.next) : []
  );

  useEffect(() => {
    setCount({
      prev: 0,
      next: numberItemShow,
    });
    setHasMore(true);
    setDataRoot(data);
  }, [data]);

  useEffect(() => {
    if (dataRoot?.length > numberItemShow) {
      setCurrentData(dataRoot && dataRoot?.length ? dataRoot?.slice(count.prev, count.next) : []);
    }
  }, [dataRoot, numberItemShow]);

  const getMoreData = () => {
    if (currentData.length === dataRoot?.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrentData(
        currentData.concat(
          dataRoot?.slice(count.prev + numberItemShow, count.next + numberItemShow)
        )
      );
    }, timeoutLoad);
    setCount((prevState) => ({
      prev: prevState.prev + numberItemShow,
      next: prevState.next + numberItemShow,
    }));
  };

  return (
    <ContainerStyled>
      <SkeletonCustom loading={loading || false} />
      {!loading &&
        (dataRoot?.length > 0 ? (
          dataRoot?.length > numberItemShow ? (
            <InfiniteScroll
              dataLength={currentData.length}
              next={getMoreData}
              hasMore={hasMore}
              loader={<SkeletonStyled avatar active paragraph={{ rows: 1 }} />}
              height={
                isMobile
                  ? layouts.height_list_scroll_desktop
                  : isTablet
                  ? layouts.header_height_tablet
                  : layouts.header_height_mobile
              }
              endMessage={
                !disableTextEndList && (
                  <TextScrollEndStyled>
                    {t('MESSAGES.TITLE.SCROLL_LOAD_MORE_END')}
                  </TextScrollEndStyled>
                )
              }
            >
              <List dataSource={currentData} renderItem={renderItem} />
            </InfiniteScroll>
          ) : (
            <List dataSource={dataRoot} renderItem={renderItem} />
          )
        ) : (
          <Empty content={contentEmptyData} />
        ))}
    </ContainerStyled>
  );
};

export default ListScrollingLoad;
