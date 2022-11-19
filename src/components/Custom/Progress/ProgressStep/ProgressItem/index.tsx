import React, { memo, ReactNode, Fragment, useState, useEffect } from 'react';
import { MdExpandLess, MdExpandMore, MdCheck } from 'react-icons/md';

import AntdDivider from 'src/components/Antd/Divider';

import colors from 'src/styles/variables/colors';
import components from 'src/styles/variables/components';
import { ContentStyled, RowItemStyled, TitleStyled, CircleStyled } from './styled';

interface ProgressItemProps {
  title?: string;
  isSelected: boolean;
  isCompleted: boolean;
  isHidden: boolean;
  children: ReactNode;
}

const ProgressItem = (props: ProgressItemProps) => {
  const { title, isCompleted, isHidden, isSelected, children } = props;

  const [isOpen, setIsOpen] = useState(isSelected);

  useEffect(() => {
    setIsOpen(isSelected);
  }, [isSelected]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      {isCompleted ? (
        <Fragment>
          <AntdDivider />
          <ContentStyled>
            <RowItemStyled>
              <TitleStyled>{title}</TitleStyled>
              <CircleStyled>
                <MdCheck size={components.icon_size_normal} color={colors.color_green} />
              </CircleStyled>
            </RowItemStyled>
          </ContentStyled>
        </Fragment>
      ) : (
        <Fragment>
          {!isHidden ? (
            <Fragment>
              <AntdDivider />
              <ContentStyled onClick={handleClick}>
                <RowItemStyled>
                  <TitleStyled>{title}</TitleStyled>
                  <CircleStyled>
                    {!isOpen ? (
                      <MdExpandMore size={components.icon_size_normal} />
                    ) : (
                      <MdExpandLess size={components.icon_size_normal} />
                    )}
                  </CircleStyled>
                </RowItemStyled>
              </ContentStyled>
            </Fragment>
          ) : (
            <Fragment>
              <AntdDivider />
              <ContentStyled>
                <RowItemStyled>
                  <TitleStyled className="disabled">{title}</TitleStyled>
                  <CircleStyled className="disabled">
                    <MdExpandMore size={components.icon_size_normal} />
                  </CircleStyled>
                </RowItemStyled>
              </ContentStyled>
            </Fragment>
          )}
        </Fragment>
      )}
      <div style={{ display: isOpen ? components.display_block : components.display_none }}>
        {children}
      </div>
    </Fragment>
  );
};

export default memo(ProgressItem);
