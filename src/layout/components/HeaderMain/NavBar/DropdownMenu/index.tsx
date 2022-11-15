import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import DropdownItem from 'src/layout/components/HeaderMain/NavBar/DropdownItem';

import RightArrowIcon from 'src/assets/icons/layout/RightArrow.png';
import LeftArrowGreenIcon from 'src/assets/icons/layout/LeftArrowGreen.png';
import { IMenuItemSubOne, IMenuItemSubTwo, IMenuItemSubThree } from 'src/layout/types';
import {
  DropDownStyled,
  PrimaryMenuEnterActiveStyled,
  PrimaryMenuEnterDoneStyled,
  PrimaryMenuExitStyled,
  PrimaryMenuExitActiveStyled,
  SecondaryMenuEnterActiveStyled,
  SecondaryMenuEnterDoneStyled,
  SecondaryMenuExitActiveStyled,
  MenuStyled,
  RightIconStyled,
  BackArrowStyled,
} from './styled';

interface DropdownMenuProps {
  data: IMenuItemSubOne[];
  isShowDropDown?: boolean;
  onClickOutside: () => void;
  onClickNavItem: () => void;
  handleNavigate: (item: IMenuItemSubOne | IMenuItemSubTwo) => void;
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const { data, isShowDropDown, onClickOutside, onClickNavItem, handleNavigate } = props;

  const navigate = useNavigate();
  const refTransition = useRef<any>(null);

  const [activeMenu, setActiveMenu] = useState('main');
  const [subDataTwo, setSubDataTwo] = useState<Array<IMenuItemSubTwo>>([]);
  const [subDataThree, setSubDataThree] = useState<Array<IMenuItemSubThree>>([]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (refTransition.current && !refTransition.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!isShowDropDown) return null;

  const handleBack = () => {
    setActiveMenu('main');
  };

  const handleClickMenuItemSubOne = (item: IMenuItemSubOne) => {
    item?.subTwo?.length === 0 && onClickNavItem();
    data?.filter((data: IMenuItemSubOne) => {
      if (data.id === item.id) {
        setSubDataTwo(item?.subTwo);
        item?.subTwo?.filter((item: IMenuItemSubTwo) =>
          setActiveMenu(item.id !== 0 ? 'sub-one' : '')
        );
        return;
      }
      return;
    });
    handleNavigate(item);
  };

  const handleClickMenuItemSubTwo = (item: IMenuItemSubTwo) => {
    item?.subThree?.length === 0 && onClickNavItem();
    subDataTwo?.filter((data: IMenuItemSubTwo) => {
      if (data.id === item.id) {
        setSubDataThree(item?.subThree);
        item?.subThree?.filter((item: IMenuItemSubThree) =>
          setActiveMenu(item.id !== 0 ? 'sub-two' : '')
        );
        return;
      }
      return;
    });

    handleNavigate(item);
  };

  const handleClickMenuItemSubThree = (item: IMenuItemSubThree) => {
    onClickNavItem();
    navigate(`${item.linkTo}`);
  };

  return (
    <DropDownStyled ref={refTransition}>
      <CSSTransition
        in={activeMenu === 'main'}
        nodeRef={refTransition}
        unmountOnExit
        timeout={0.1}
        className={{
          enterActive: PrimaryMenuEnterActiveStyled,
          enterDone: PrimaryMenuEnterDoneStyled,
          exitActive: PrimaryMenuExitStyled,
          exitDone: PrimaryMenuExitActiveStyled,
        }}
      >
        <MenuStyled>
          {data.map((item: IMenuItemSubOne) => (
            <DropdownItem
              key={item.id}
              subId={item.id}
              subTitle={item.title}
              rightIcon={item.subTwo.length > 0 && <RightIconStyled iconSource={RightArrowIcon} />}
              target={item.target}
              onClickSubTitle={() => handleClickMenuItemSubOne(item)}
            />
          ))}
        </MenuStyled>
      </CSSTransition>
      {subDataTwo?.length > 0 && (
        <CSSTransition
          in={activeMenu === 'sub-one'}
          nodeRef={refTransition}
          unmountOnExit
          timeout={0.1}
          className={{
            enterActive: SecondaryMenuEnterActiveStyled,
            enterDone: SecondaryMenuEnterDoneStyled,
            exitDone: SecondaryMenuExitActiveStyled,
          }}
        >
          <MenuStyled>
            <BackArrowStyled iconSource={LeftArrowGreenIcon} onClick={handleBack} />
            {subDataTwo?.map((item: IMenuItemSubTwo) => (
              <DropdownItem
                key={item.id}
                subId={item.id}
                subTitle={item.title}
                rightIcon={
                  item.subThree.length > 0 && <RightIconStyled iconSource={RightArrowIcon} />
                }
                target={item.target}
                onClickSubTitle={() => handleClickMenuItemSubTwo(item)}
              />
            ))}
          </MenuStyled>
        </CSSTransition>
      )}
      {subDataThree?.length > 0 && (
        <CSSTransition
          in={activeMenu === 'sub-two'}
          nodeRef={refTransition}
          unmountOnExit
          timeout={0.1}
          className={{
            enterActive: SecondaryMenuEnterActiveStyled,
            enterDone: SecondaryMenuEnterDoneStyled,
            exitDone: SecondaryMenuExitActiveStyled,
          }}
        >
          <MenuStyled>
            <BackArrowStyled iconSource={LeftArrowGreenIcon} onClick={handleBack} />
            {subDataThree?.map((item: IMenuItemSubThree) => (
              <DropdownItem
                key={item.id}
                subId={item.id}
                subTitle={item.title}
                target={item.target}
                onClickSubTitle={() => handleClickMenuItemSubThree(item)}
              />
            ))}
          </MenuStyled>
        </CSSTransition>
      )}
    </DropDownStyled>
  );
};

export default DropdownMenu;
