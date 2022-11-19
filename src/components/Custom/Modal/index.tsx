import React from 'react';
import ButtonLink from 'src/components/Antd/Button/ButtonLink';

import { OverlayStyled, ContainerStyled, DataStyled } from './styled';

export interface CustomModalProps {
  visible?: boolean;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  content?: React.ReactNode;
  contentButton?: React.ReactNode;
  textLink?: string;
  onClickLink?: () => void;
}

const CustomModal = (props: CustomModalProps) => {
  const { visible, icon, title, content, contentButton, textLink, onClickLink } = props;
  return (
    <OverlayStyled isVisible={visible}>
      <ContainerStyled>
        <DataStyled>
          {icon}
          {title}
          {content}
          {textLink && <ButtonLink onClick={onClickLink}>{textLink}</ButtonLink>}
          {contentButton}
        </DataStyled>
      </ContainerStyled>
    </OverlayStyled>
  );
};

export default CustomModal;
