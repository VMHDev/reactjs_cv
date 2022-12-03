import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';

import Text from 'src/components/Custom/Text';
import Icon from 'src/components/Custom/Icon';
import Image from 'src/components/Custom/Image';
import AntdLoadingInline from 'src/components/Antd/Loading/LoadingInline';

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-width: 20rem;
  height: 15.9rem;
  background-color: var(--color_black);
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const CardInfoStyled = styled.div`
  z-index: 1;
`;

export const TitleStyled = styled(Text)`
  font-size: ${fonts.font_size_xxl};
  line-height: ${fonts.font_line_height_medium};
  font-weight: ${fonts.font_weight_medium};
  padding: 1.8rem 0rem 0.5rem 1.5rem;
  color: var(--color_white);
`;

export const DescStyled = styled(Text)`
  font-size: ${fonts.font_size_small};
  line-height: ${fonts.font_line_height_small};
  font-weight: ${fonts.font_weight_small};
  padding: 0rem 0rem 0rem 1.5rem;
  color: var(--color_white);
`;

export const ValueMainContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1.5rem;
  padding-bottom: 0.5rem;
`;

export const ValueMainStyled = styled(Text)`
  font-size: ${fonts.font_size_extra};
  line-height: ${fonts.font_line_height_extra};
  font-weight: ${fonts.font_weight_medium};
  color: var(--color_green);
`;

export const ValueChangeContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1.5rem;
  padding-bottom: 1.8rem;
`;

export const ValueChangeStyled = styled(Text)`
  font-size: ${fonts.font_size_large};
  line-height: ${fonts.font_line_height_large};
  font-weight: ${fonts.font_weight_small};
  color: var(--color_white);
`;

export const IconStyled = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const LoadingSpinMediumStyled = styled(AntdLoadingInline)`
  font-size: ${fonts.font_size_xxxl} !important;
  color: var(--color_green) !important;
`;

export const LoadingSpinSmallStyled = styled(AntdLoadingInline)`
  font-size: ${fonts.font_size_xl} !important;
  color: var(--color_white) !important;
`;

export const ChartStyled = styled(Image)`
  width: 100%;
  max-height: 70%;
  min-height: 4rem;
  position: absolute;
  bottom: 0;
  z-index: 0;
`;
