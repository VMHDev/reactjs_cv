import React from 'react';
import { Col, Row } from 'antd';

import { ContainerPagesStyled, ContainerContentStyled } from './styled';

interface MainContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  isCenterPage?: boolean;
  isFullHeight?: boolean;
  isFullHeightNoneHeader?: boolean;
  isNoPadding?: boolean;
  isGridLayout?: boolean;
  headerMenu?: React.ReactNode;
  progressHeader?: React.ReactNode;
}

const MainContainer = (props: MainContainerProps, ref: any) => {
  const {
    id,
    children,
    className,
    isCenterPage = false,
    isFullHeight = false,
    isFullHeightNoneHeader = false,
    headerMenu,
    isGridLayout = false,
    progressHeader,
    isNoPadding = false,
  } = props;

  return (
    <ContainerPagesStyled
      id={id}
      ref={ref}
      className={className}
      isCenterPage={isCenterPage}
      isFullHeight={isFullHeight}
      isFullHeightNoneHeader={isFullHeightNoneHeader}
    >
      {progressHeader && progressHeader}
      <ContainerContentStyled isNoPadding={isNoPadding}>
        {headerMenu && headerMenu}

        {isGridLayout ? (
          <Row>
            <Col
              xxl={{ span: 16, push: 4 }}
              xl={{ span: 16, push: 4 }}
              lg={{ span: 20, push: 2 }}
              md={{ span: 20, push: 2 }}
              sm={24}
              xs={24}
            >
              {children}
            </Col>
          </Row>
        ) : (
          children
        )}
      </ContainerContentStyled>
    </ContainerPagesStyled>
  );
};
export default React.memo(React.forwardRef(MainContainer));
