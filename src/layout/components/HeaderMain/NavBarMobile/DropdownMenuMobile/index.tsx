import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { MENU_KEY } from 'src/layout/constants/menu';
import { navigateMenu } from 'src/layout/utils';
import DropdownItemMobile from 'src/layout/components/HeaderMain/NavBarMobile/DropdownItemMobile';

import {
  IHeaderMenuItem,
  IMenuItemSubOne,
  IMenuItemSubTwo,
  IMenuItemSubThree,
} from 'src/layout/types';
import RightArrowIcon from 'src/assets/icons/layout/RightArrow.png';
import LeftArrowGreenIcon from 'src/assets/icons/layout/LeftArrowGreen.png';
import {
  DropdownContainerStyled,
  DropdownContentStyled,
  NavItemStyled,
  NavLinkStyled,
  NextArrowStyled,
  BackArrowStyled,
  BottomLineStyled,
} from './styled';

interface DropdownMenuMobileProps {
  dataMain: IHeaderMenuItem[];
  refTransition: React.MutableRefObject<any>;
  setIsOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownMenuMobile = (props: DropdownMenuMobileProps) => {
  const { dataMain, refTransition, setIsOpenDropdown } = props;

  const { t } = useTranslation(['layout']);
  const history = useHistory();

  const [idItemActive, setIdItemActive] = useState(0);
  const [keyMenuActive, setKeyMenuActive] = useState(MENU_KEY.MAIN);
  const [dataSubOne, setDataSubOne] = useState<Array<IMenuItemSubOne>>([]);
  const [dataSubTwo, setDataSubTwo] = useState<Array<IMenuItemSubTwo>>([]);
  const [dataSubThree, setDataSubThree] = useState<Array<IMenuItemSubThree>>([]);
  const [contentHeight, setHeight] = useState(dataMain?.length > 6 ? 530 : 330);

  const heightCalc = () => {
    const offsetHeight = refTransition?.current?.offsetHeight;
    const height = offsetHeight ? offsetHeight : dataMain?.length > 6 ? 530 : 330;
    setHeight(height || 530);
  };

  const handleBackMain = () => {
    setKeyMenuActive(MENU_KEY.MAIN);
  };

  const handleBackSubOne = () => {
    setKeyMenuActive(MENU_KEY.SUB_ONE);
  };

  const handleBackSubTwo = () => {
    setKeyMenuActive(MENU_KEY.SUB_THREE);
  };

  const handleClickMenuItemMain = (item: IHeaderMenuItem) => {
    setIdItemActive(item?.id);

    dataMain?.filter((sub: IHeaderMenuItem) => {
      if (sub.id === item?.id) {
        if (sub?.subOne?.length > 0) {
          setKeyMenuActive(MENU_KEY.SUB_ONE);
        }
        return setDataSubOne(sub?.subOne);
      }
    });
    navigateMenu(item, history);
  };

  const handleClickMenuItemSubOne = (item: IMenuItemSubOne) => {
    setIdItemActive(item?.id);

    dataSubOne?.filter((sub: IMenuItemSubOne) => {
      if (sub?.id === item?.id) {
        if (sub?.subTwo?.length > 0) {
          setKeyMenuActive(MENU_KEY.SUB_TWO);
        }
        return setDataSubTwo(sub?.subTwo);
      }
    });
    navigateMenu(item, history);
  };

  const handleClickMenuItemSubTwo = (item: IMenuItemSubTwo) => {
    setIdItemActive(item?.id);
    dataSubTwo?.filter((sub: IMenuItemSubTwo) => {
      if (sub?.id === item?.id) {
        if (sub?.subThree?.length > 0) {
          setKeyMenuActive(MENU_KEY.SUB_THREE);
        }
        return setDataSubThree(sub?.subThree);
      }
    });
    navigateMenu(item, history);
  };

  const handleClickMenuItemSubThree = (item: IMenuItemSubThree) => {
    setIdItemActive(item?.id);
    setIsOpenDropdown(false);
    history.push(`${item.linkTo}`);
  };

  return (
    <DropdownContainerStyled style={{ height: contentHeight }}>
      <DropdownContentStyled style={{ height: contentHeight + 50 }}>
        <CSSTransition
          in={keyMenuActive === MENU_KEY.MAIN}
          nodeRef={refTransition}
          unmountOnExit
          timeout={0.1}
          onEnter={heightCalc}
        >
          <div ref={refTransition}>
            {dataMain?.map((item: IHeaderMenuItem) => (
              <div key={item?.id}>
                <NavItemStyled onClick={() => handleClickMenuItemMain(item)}>
                  <NavLinkStyled isActive={item.id === idItemActive}>
                    {t(item?.title)}
                  </NavLinkStyled>
                  {item?.subOne?.length > 0 && <NextArrowStyled iconSource={RightArrowIcon} />}
                </NavItemStyled>
                <BottomLineStyled />
              </div>
            ))}
          </div>
        </CSSTransition>
        <CSSTransition
          in={keyMenuActive === MENU_KEY.SUB_ONE}
          nodeRef={refTransition}
          unmountOnExit
          timeout={0.1}
          onEnter={heightCalc}
        >
          <div ref={refTransition}>
            <BackArrowStyled iconSource={LeftArrowGreenIcon} onClick={handleBackMain} />
            {dataSubOne?.map((item: IMenuItemSubOne) => (
              <DropdownItemMobile
                key={item?.id}
                subId={item.id}
                subTitle={item?.title}
                activeItem={item.id === idItemActive}
                arrowNext={
                  item.subTwo.length > 0 && <NextArrowStyled iconSource={RightArrowIcon} />
                }
                onClickItem={() => handleClickMenuItemSubOne(item)}
              />
            ))}
          </div>
        </CSSTransition>
        <CSSTransition
          in={keyMenuActive === MENU_KEY.SUB_TWO}
          nodeRef={refTransition}
          onEnter={heightCalc}
          unmountOnExit
          timeout={0.1}
        >
          <div ref={refTransition}>
            <BackArrowStyled iconSource={LeftArrowGreenIcon} onClick={handleBackSubOne} />
            {dataSubTwo?.map((item: IMenuItemSubTwo) => (
              <DropdownItemMobile
                key={item?.id}
                subId={item.id}
                subTitle={item?.title}
                activeItem={item.id === idItemActive}
                arrowNext={
                  item.subThree.length > 0 && <NextArrowStyled iconSource={RightArrowIcon} />
                }
                onClickItem={() => handleClickMenuItemSubTwo(item)}
              />
            ))}
          </div>
        </CSSTransition>
        <CSSTransition
          in={keyMenuActive === MENU_KEY.SUB_THREE}
          nodeRef={refTransition}
          onEnter={heightCalc}
          unmountOnExit
          timeout={0.1}
        >
          <div ref={refTransition}>
            <BackArrowStyled iconSource={LeftArrowGreenIcon} onClick={handleBackSubTwo} />
            {dataSubThree?.map((item: IMenuItemSubThree) => (
              <DropdownItemMobile
                key={item?.id}
                subId={item.id}
                subTitle={item?.title}
                activeItem={item?.id === idItemActive}
                onClickItem={() => handleClickMenuItemSubThree(item)}
              />
            ))}
          </div>
        </CSSTransition>
      </DropdownContentStyled>
    </DropdownContainerStyled>
  );
};

export default DropdownMenuMobile;
