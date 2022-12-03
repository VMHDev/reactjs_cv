import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'antd';

import {
  ContainerStyled,
  ContainerTitleStyled,
  IconStyled,
  TitleStyled,
  ContentStyled,
  ContainerButtonStyled,
  ButtonStyled,
} from './styled';

export interface AntdModalOneButtonProps {
  isVisible: boolean;
  handleClick: any;
  title: string;
  desc?: string;
  textButton?: string;
}

const AntdModalOneButton = (props: AntdModalOneButtonProps) => {
  const { isVisible, handleClick, title, desc, textButton } = props;
  const { t } = useTranslation(['commons']);

  const onClick = () => {
    handleClick();
  };

  return (
    <Modal visible={isVisible} closable={false} centered={true} footer={null}>
      <ContainerStyled>
        <ContainerTitleStyled>
          <IconStyled />
          {title && <TitleStyled>{title}</TitleStyled>}
          {desc && <ContentStyled>{desc}</ContentStyled>}
        </ContainerTitleStyled>
        <ContainerButtonStyled>
          <ButtonStyled onClick={onClick}>
            {textButton ? textButton : t('BUTTONS.CLOSE')}
          </ButtonStyled>
        </ContainerButtonStyled>
      </ContainerStyled>
    </Modal>
  );
};
export default AntdModalOneButton;
