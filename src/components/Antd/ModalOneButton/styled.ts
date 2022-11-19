import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';

import { CheckOutlined } from '@ant-design/icons';
import SecondaryButton from 'src/components/Antd/Button/ButtonSecondary';
import Text from 'src/components/Custom/Text';

export const ContainerStyled = styled.div`
  padding: 2rem 0rem;
`;
export const ContainerTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const IconStyled = styled(CheckOutlined)`
  padding-bottom: 1rem;
  svg {
    color: ${colors.color_white};
    background-color: var(--color_green);
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    padding: 2rem;
  }
`;

export const TitleStyled = styled(Text)`
  font-weight: ${fonts.font_weight_large};
  font-size: ${fonts.font_size_xxl};
  line-height: ${fonts.font_line_height_xxl};
  color: ${colors.color_black};
`;

export const ContentStyled = styled(Text)`
  font-size: ${fonts.font_size_xxl};
  line-height: ${fonts.font_line_height_xxl};
  color: ${colors.color_black};
`;

export const ContainerButtonStyled = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  width: 100%;
`;

export const ButtonStyled = styled(SecondaryButton)`
  margin-top: 1rem;
  height: 6rem !important;
  white-space: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;
