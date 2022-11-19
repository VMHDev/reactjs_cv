import React from 'react';

import LogoGreen from 'src/assets/images/logo/LogoGreen.png';

import {
  ContainerStyled,
  ImageStyled,
  DescStyled,
  TitleStyled,
  CaptionStyled,
  AdvertisingImageStyled,
} from './styled';

interface BannerTypeOneProps {
  desc: string;
  title: string;
  caption: string;
  className?: string;
  image?: string;
}

const BannerTypeOne = (props: BannerTypeOneProps) => {
  const { desc, title, caption, className = '', image = '' } = props;
  return (
    <ContainerStyled className={className}>
      <ImageStyled src={LogoGreen} alt="logo" preview={false} />
      <DescStyled>{desc}</DescStyled>
      <TitleStyled>{title}</TitleStyled>
      <CaptionStyled>{caption}</CaptionStyled>
      {image && <AdvertisingImageStyled src={image} alt="logo" preview={false} />}
    </ContainerStyled>
  );
};

export default BannerTypeOne;
