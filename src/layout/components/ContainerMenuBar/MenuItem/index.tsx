import React from 'react';
import { MENU_CONTAINER } from 'src/layout/constants/menu';
import MenuDetail from 'src/layout/components/ContainerMenuBar/MenuDetail';

import { DropdownStyled } from './styled';

interface MenuItemProps {
  itemTitle: React.ReactNode;
}

const MenuItem = (props: MenuItemProps) => {
  const { itemTitle } = props;

  return (
    <DropdownStyled
      trigger={['click', 'hover']}
      overlayClassName="container"
      overlay={<MenuDetail dataMenu={MENU_CONTAINER} />}
      placement="bottomLeft"
      arrow
    >
      {itemTitle}
    </DropdownStyled>
  );
};

export default MenuItem;
