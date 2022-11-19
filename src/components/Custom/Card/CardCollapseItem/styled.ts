import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';
import devices from 'src/styles/variables/devices';

import { Col } from 'antd';
import Text from 'src/components/Custom/Text';
import Icon from 'src/components/Custom/Icon';

export const ContainerLayoutStyled = styled.div`
  display: flex;
  flex: 1;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 2rem;
  border-bottom: 1px solid ${colors.color_gray_mid};
  background-color: var(--color_black);
`;

export const ContainerContentStyled = styled.div`
  cursor: pointer;
  display: 'flex';
  flex: 1;
`;

export const ColLeftStyled = styled(Col)`
  margin-left: 0.5rem;
  flex: 4;
`;

export const ColRightStyled = styled(Col)`
  flex: 5;
  text-align: right;
  white-space: nowrap;
`;

export const TitleStyled = styled(Text)`
  font-size: ${fonts.font_size_large};
  line-height: ${fonts.font_line_height_large};
  font-weight: ${fonts.font_weight_medium};

  @media ${devices.media_mobile} {
    font-size: ${fonts.font_size_medium};
    line-height: ${fonts.font_line_height_medium};
  }
`;

export const ValueMainStyled = styled(Text)`
  font-size: ${fonts.font_size_xxl};
  line-height: ${fonts.font_line_height_xxl};
  font-weight: ${fonts.font_weight_medium};

  @media ${devices.media_mobile} {
    font-size: ${fonts.font_size_xl};
    line-height: ${fonts.font_line_height_xl};
    font-weight: ${fonts.font_weight_medium};
  }
`;

export const ValueChangeStyled = styled(Text).attrs((props: any) => ({
  isDown: props.isDown,
  isUp: props.isUp,
}))`
  font-size: ${fonts.font_size_small};
  line-height: ${fonts.font_line_height_small};
  font-weight: ${fonts.font_weight_small};
  padding-bottom: 1rem;

  color: ${(props) =>
    props.isDown ? colors.color_red : props.isUp ? colors.color_green : 'inherit'};
`;

export const ColorRedStyled = styled.div`
  color: ${colors.color_red};
`;

export const ColorGreenStyled = styled.div`
  color: ${colors.color_green};
`;

export const IconStyled = styled(Icon)`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 1rem;
  margin-bottom: 0.3rem;
`;
