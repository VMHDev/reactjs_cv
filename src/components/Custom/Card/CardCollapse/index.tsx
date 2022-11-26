import React, { useState } from 'react';
import { Collapse } from 'antd';
import { useHistory } from 'react-router-dom';

import { ROOT } from 'src/layout/constants/url';
import { CARD_ITEM } from 'src/constants/card';

import CardCollapseItem from 'src/components/Custom/Card/CardCollapseItem';
import CardCollapsePanel from 'src/components/Custom/Card/CardCollapsePanel';

import DownRed from 'src/assets/icons/gui/DownRed.png';
import UpGreen from 'src/assets/icons/gui/UpGreen.png';
import { ContainerStyled, CollapseStyled } from './styled';

const { Panel } = Collapse;

interface CardCollapseProps {
  isLoadingValue: boolean;
  valueMain: number;
  valueChange: number;
}

const CardCollapse = (props: CardCollapseProps) => {
  const history = useHistory();
  const { isLoadingValue, valueMain, valueChange } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onClickItem = (itemId: number) => {
    switch (itemId) {
      case 1:
        history.push(ROOT.DASHBOARD);
        break;
      case 2:
        history.push(ROOT.DASHBOARD);
        break;
      case 3:
        history.push(ROOT.DASHBOARD);
        break;
      case 4:
        history.push(ROOT.DASHBOARD);
        break;
      default:
        break;
    }
  };

  return (
    <ContainerStyled>
      <CollapseStyled
        expandIconPosition="start"
        onChange={() => {
          setIsCollapsed(!isCollapsed);
        }}
        expandIcon={() => <div />}
      >
        <Panel
          key="2"
          header={
            <CardCollapsePanel
              isCollapsed={isCollapsed}
              isLoadingValue={isLoadingValue}
              valueMain={valueMain}
              valueChange={valueChange}
            />
          }
        >
          {CARD_ITEM.map((item, index) => (
            <CardCollapseItem
              key={index}
              title={item.title}
              valueMain={item.valueMain || 0}
              valueChange={item.valueChange || 0}
              icon={item.valueChange < 0 ? DownRed : UpGreen}
              onClick={() => onClickItem(item?.id || -1)}
            />
          ))}
        </Panel>
      </CollapseStyled>
    </ContainerStyled>
  );
};

export default CardCollapse;
