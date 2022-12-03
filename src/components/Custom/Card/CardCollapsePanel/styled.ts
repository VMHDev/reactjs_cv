import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';

import Text from 'src/components/Custom/Text';
import Icon from 'src/components/Custom/Icon';
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

export const ContainerContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconChartStyled = styled(Icon)`
  width: 100%;
  max-height: 70%;
  min-height: 4rem;
  position: absolute;
  bottom: 0;
`;

export const ValueContainerStyled = styled.div`
  flex: 8;
  z-index: auto;
  position: relative;
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
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.5rem;
`;

export const IconCollapseStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2rem;
`;

export const ArrowIconStyled = styled(Icon)`
  right: 1rem;
  margin-bottom: 5rem;
  z-index: 1;
`;

export const LoadingSpinMediumStyled = styled(AntdLoadingInline)`
  font-size: ${fonts.font_size_xxxl};
  color: var(--color_green) !important;
`;

export const LoadingSpinSmallStyled = styled.div`
  font-size: ${fonts.font_size_xl};
  color: var(--color_white) !important;
`;
