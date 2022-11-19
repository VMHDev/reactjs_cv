import React from 'react';
import { Radio } from 'antd';

import { ItemTabStyled } from './styled';

interface IDataOption {
  value: string | number;
  label: string;
}

interface TabButtonRadioProps {
  indexActive: number;
  listItem: Array<IDataOption>;
  styleContainer?: string;
  onChangeTab: (e: any) => void;
}

const TabButtonRadio = (props: TabButtonRadioProps) => {
  const { indexActive, listItem = [], styleContainer = '', onChangeTab } = props;
  return (
    <div className={styleContainer}>
      <Radio.Group value={indexActive} defaultValue={listItem[0]?.value} onChange={onChangeTab}>
        {listItem.map((item, index) => {
          return (
            <ItemTabStyled key={index} value={item?.value}>
              {item?.label || ''}
            </ItemTabStyled>
          );
        })}
      </Radio.Group>
    </div>
  );
};

export default TabButtonRadio;
