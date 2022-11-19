import React, { ReactNode } from 'react';
import { BackgroundImageStyled } from './styled';

interface BackgroundImageProps {
  classNameCover?: string;
  children: ReactNode;
}

const BackgroundImage = (props: BackgroundImageProps) => {
  const { classNameCover = '', children } = props;
  return (
    <BackgroundImageStyled>
      <div className={classNameCover}>{children}</div>
    </BackgroundImageStyled>
  );
};

export default BackgroundImage;
