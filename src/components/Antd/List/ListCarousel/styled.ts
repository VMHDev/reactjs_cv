import styled, { css } from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';
import devices from 'src/styles/variables/devices';

import { Carousel, Col } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Text from 'src/components/Custom/Text';

export const SkeletonStyled = styled.div`
  margin-top: 2rem;
`;

export const ContainerStyled = styled.div`
  .container {
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;

    :global {
      .ant-carousel .slick-dots li.slick-active button {
        background-color: ${colors.color_green};
      }
      .ant-carousel .slick-dots li button {
        margin-top: 3rem;
        background: ${colors.color_green};
      }
      .anticon svg {
        display: inline-block;
        width: 3rem;
        height: 4rem;
      }
    }
  }
  .borderSoild {
    border: 1px solid ${colors.color_green};
    border-radius: 1rem;
    padding: 1.5rem;
  }
`;

export const ButtonContainerStyled = styled(Col)`
  display: flex !important;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconControlNormalStyled = css`
  color: ${colors.color_green} !important;
`;

export const LeftOutlinedNormalStyled = styled(LeftOutlined)`
  ${IconControlNormalStyled}
`;

export const RightOutlinedNormalStyled = styled(RightOutlined)`
  ${IconControlNormalStyled}
`;

const IconControlDisableStyled = css`
  color: ${colors.color_green} !important;
  opacity: 0.4;
  cursor: not-allowed;
`;

export const LeftOutlinedDisableStyled = styled(LeftOutlined)`
  ${IconControlDisableStyled}
`;

export const RightOutlinedDisableStyled = styled(RightOutlined)`
  ${IconControlDisableStyled}
`;

export const SlideContainerStyled = styled(Col)`
  position: relative;
`;

export const SlideTitleStyled = styled(Text)`
  font-weight: ${fonts.font_weight_medium};
  font-size: ${fonts.font_size_xl};
  padding-bottom: 1.7rem;
  color: ${colors.color_green};
`;

export const SlideCarouselStyled = styled(Carousel)`
  @media ${devices.media_mobile} {
    overflow: hidden;
  }
`;
