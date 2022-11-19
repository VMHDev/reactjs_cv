import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';

import Text from 'src/components/Custom/Text';
import Icon from 'src/components/Custom/Icon';
import LoadingInline from 'src/components/Antd/Loading/LoadingInline';

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 20rem;
  height: 15.9rem;
  padding: 1.8rem 1.5rem;
  background-color: ${colors.color_green};
  border: 1px solid ${colors.color_green};
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const TitleStyled = styled(Text)`
  font-size: ${fonts.font_size_xl};
  line-height: ${fonts.font_line_height_medium};
  font-weight: ${fonts.font_weight_medium};
  color: var(--color_black);
`;

export const ValueMainContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ValueMainStyled = styled(Text)`
  font-size: 4.8rem;
  line-height: ${fonts.font_line_height_xxl};
  font-weight: ${fonts.font_weight_medium};
  color: var(--color_black);
`;

export const ValueChangeContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ValueChangeStyled = styled(Text)`
  font-size: ${fonts.font_size_large};
  line-height: ${fonts.font_line_height_large};
  font-weight: ${fonts.font_weight_small};
  color: var(--color_black);
`;

export const IconStyled = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const LoadingSpinMediumStyled = styled(LoadingInline)`
  font-size: ${fonts.font_size_xxxl} !important;
  color: var(--color_black) !important;
`;

export const LoadingSpinSmallStyled = styled(LoadingInline)`
  font-size: ${fonts.font_size_xl} !important;
  color: var(--color_black) !important;
`;
