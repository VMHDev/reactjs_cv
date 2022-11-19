import React from 'react';

import { STRINGS } from 'src/constants/commons';
import Banner from 'src/components/Custom/Slider/Banner';

import { BannerProps } from 'src/components/Custom/Slider/Banner';
import { HeaderStyled, SliderStyled } from './styled';

interface SliderProps {
  titleSlider: string;
  listItem: Array<BannerProps>;
  isWrap?: boolean;
}

const Slider = (props: SliderProps) => {
  const { titleSlider, listItem, isWrap = false } = props;
  return (
    <>
      <HeaderStyled>{titleSlider}</HeaderStyled>
      <SliderStyled>
        <div className={isWrap ? 'sliderWrap' : 'sliderScroll'}>
          {listItem.map((item: BannerProps, index: number) => (
            <Banner
              key={index}
              title={item?.title || STRINGS.EMPTY}
              icon={item?.icon}
              link={item?.link}
              onClick={item?.onClick}
            />
          ))}
        </div>
      </SliderStyled>
    </>
  );
};

export default Slider;
