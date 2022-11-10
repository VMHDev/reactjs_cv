import React from 'react';
import Icon from 'src/components/Custom/Icon';
import DropdownItemNoneLink from 'src/layout/components/HeaderMain/DropdownItemNoneLink';

import { MenuContainerStyled, MenuItemStyled } from './styled';

interface DropdownItemProps {
  leftIcon?: string;
  rightIcon?: React.ReactNode;
  subId: number;
  subTitle: string;
  target: string;
  onClickSubTitle?: () => void;
}

const DropdownItem = (props: DropdownItemProps) => {
  const { leftIcon, rightIcon, subId, subTitle, target, onClickSubTitle } = props;
  return (
    <MenuContainerStyled onClick={onClickSubTitle}>
      {leftIcon && <Icon iconSource={leftIcon} />}
      <MenuItemStyled target={target}>
        <DropdownItemNoneLink subId={subId} subTitle={subTitle} />
      </MenuItemStyled>
      {rightIcon}
    </MenuContainerStyled>
  );
};

export default DropdownItem;
