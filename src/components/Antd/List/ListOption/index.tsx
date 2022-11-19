import React, { useState, ReactNode } from 'react';
import ButtonSecondary from 'src/components/Antd/Button/ButtonSecondary';

import { OptionStyled, ActiveStyled } from './styled';

interface OptionItem {
  label: string;
  value: any;
  icon?: ReactNode;
  iconActive?: ReactNode;
}

interface ListOptionProps {
  dataOptions: Array<OptionItem>;
  onSelect: (item: OptionItem) => void;
}

const ListOption = (props: ListOptionProps) => {
  const { dataOptions, onSelect } = props;
  const [itemSelectedValue, setItemSelectedValue] = useState(-1);

  const handleSelectButton = (item: OptionItem) => {
    setItemSelectedValue(item.value);
    onSelect(item);
  };

  return (
    <>
      {dataOptions.map((item, index) => {
        return (
          <OptionStyled key={`options_${index}`}>
            <ActiveStyled>
              <ButtonSecondary
                htmlType="button"
                disabled={false}
                onClick={() => handleSelectButton(item)}
                className={item.value === itemSelectedValue ? 'active' : ''}
                icon={
                  item.value === itemSelectedValue && item.iconActive ? item.iconActive : item.icon
                }
              >
                {item.label}
              </ButtonSecondary>
            </ActiveStyled>
          </OptionStyled>
        );
      })}
    </>
  );
};

export default ListOption;
