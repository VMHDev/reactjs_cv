import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Row } from 'antd';
import { orderBy } from 'lodash';

import Skeleton from 'src/components/Antd/Skeleton';
import AntdListCarouselItemTypeOne from 'src/components/Antd/List/ListCarouselItemTypeOne';

import {
  ContainerStyled,
  SlideContainerStyled,
  SlideTitleStyled,
  SlideCarouselStyled,
  ButtonContainerStyled,
  LeftOutlinedNormalStyled,
  LeftOutlinedDisableStyled,
  RightOutlinedNormalStyled,
  RightOutlinedDisableStyled,
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

interface AntdListCarouselProps {
  data: ItemListDataTypeTwo[];
  loading?: boolean;
  isShowBorder?: boolean;
  showModal?: (item: ItemListDataTypeTwo) => void;
}

const AntdListCarousel = (props: AntdListCarouselProps) => {
  const { data, loading = false, isShowBorder = false, showModal = () => null } = props;
  const { t } = useTranslation(['gui']);
  const totalPerPage = 5;
  const slide: any = useRef();
  const [displayArrowLeft, setDisplayArrowLeft] = useState<boolean>(true);
  const [displayArrowRight, setDisplayArrowRight] = useState<boolean>(true);
  const [indexSlide, setIndexSlide] = useState<number>(0);
  const [dataSorted, setDataStored] = useState<any[]>([]);

  // Logic for displaying page numbers
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data?.length / totalPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    setDisplayArrowLeft(indexSlide > 0);
    setDisplayArrowRight(indexSlide < pageNumbers?.length - 1);
  }, [indexSlide]);

  useEffect(() => {
    setDisplayArrowRight(data?.length > totalPerPage);
    if (Array.isArray(data)) {
      const sortedArray = orderBy(data, [() => new Date()], ['desc']);
      setDataStored(sortedArray);
    }
  }, [data]);
  ////////////////////////////////////////////

  const handleMoveToPreSlide = () => {
    slide?.current?.prev();
    indexSlide > 0 && setIndexSlide(indexSlide - 1);
  };

  const handleMoveToNextSlide = () => {
    slide?.current?.next();
    indexSlide < pageNumbers?.length - 1 && setIndexSlide(indexSlide + 1);
  };

  const changePagingCarousel = (current: number) => {
    setIndexSlide(current);
  };

  const renderListOrder = pageNumbers.map((item: any, index: number) => {
    const indexOfLastTodo = item * totalPerPage;
    const indexOfFirstTodo = indexOfLastTodo - totalPerPage;
    const currentOrders = dataSorted?.slice(indexOfFirstTodo, indexOfLastTodo);

    return (
      <Row key={index}>
        <AntdListCarouselItemTypeOne showModal={showModal} item={currentOrders} />
      </Row>
    );
  });

  return (
    <>
      <Skeleton loading={loading} />
      {!loading && (
        <ContainerStyled>
          <Row className={`container ${isShowBorder ? 'borderSoild' : ''}`}>
            <ButtonContainerStyled xs={3} sm={3} md={2} lg={2} xl={2} xxl={2}>
              {displayArrowLeft ? (
                <LeftOutlinedNormalStyled onClick={handleMoveToPreSlide} />
              ) : (
                <LeftOutlinedDisableStyled />
              )}
            </ButtonContainerStyled>
            <SlideContainerStyled xs={18} sm={18} md={20} lg={20} xl={20} xxl={20}>
              <SlideTitleStyled>{t('LIST.DASHBOARD.LIST_CAROUSEL')}</SlideTitleStyled>
              <SlideCarouselStyled
                ref={(ref: any) => (slide.current = ref)}
                afterChange={changePagingCarousel}
              >
                {renderListOrder}
              </SlideCarouselStyled>
            </SlideContainerStyled>
            <ButtonContainerStyled xs={3} sm={3} md={2} lg={2} xl={2} xxl={2}>
              {displayArrowRight ? (
                <RightOutlinedNormalStyled onClick={handleMoveToNextSlide} />
              ) : (
                <RightOutlinedDisableStyled />
              )}
            </ButtonContainerStyled>
          </Row>
        </ContainerStyled>
      )}
    </>
  );
};

export default AntdListCarousel;
