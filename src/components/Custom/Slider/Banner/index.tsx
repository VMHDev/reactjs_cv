import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { ContainerStyled, ContentStyled, IconStyled, TitleStyled } from './styled';

export interface BannerProps {
  icon: any;
  title: string;
  link?: string;
  onClick?: () => void;
}

const Banner = (props: BannerProps) => {
  const { icon, title, link = '', onClick = () => null } = props;
  const history = useHistory();

  const handleClick = link
    ? () => {
        history.push(link);
      }
    : onClick;

  return (
    <ContainerStyled onClick={handleClick}>
      <ContentStyled>
        <IconStyled src={icon} alt="logo" preview={false} />
        <TitleStyled>{title}</TitleStyled>
      </ContentStyled>
    </ContainerStyled>
  );
};
export default memo(Banner);
