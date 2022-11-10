import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import { IContainerMenuItem } from 'src/layout/types';
import { MyLinkStyled, MenuDividerStyled } from './styled';

interface MenuDetailProps {
  dataMenu: Array<IContainerMenuItem>;
}

const MenuDetail = (props: MenuDetailProps) => {
  const { dataMenu } = props;

  return (
    <Menu>
      {dataMenu.map((item, index) => (
        <Menu.Item key={index}>
          <MyLinkStyled>
            <Link className="navLink" to={`${item.link}`}>
              {item.text}
            </Link>
          </MyLinkStyled>
          <MenuDividerStyled />
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuDetail;
