import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';
import components from 'src/styles/variables/components';
import { Button } from 'antd';

export const ButtonTransparentStyled = styled(Button)<{ $isLoading: boolean }>`
  height: ${components.height_button} !important;
  transition: all 0.3s linear;

  font-size: ${fonts.font_size_large} !important;
  font-weight: ${fonts.font_weight_medium} !important;
  line-height: ${fonts.font_line_height_normal} !important;

  color: ${colors.color_white} !important;
  background-color: transparent !important;
  border: 1px solid ${colors.color_white} !important;
  border-radius: 0.4rem !important;
  box-sizing: border-box !important;

  cursor: ${(props: any) => (props.$isLoading ? 'not-allowed' : 'default')} !important;

  &:focus {
    background-color: ${colors.color_white} !important;
    color: ${colors.color_black} !important;
  }
  &:hover {
    background-color: ${colors.color_white} !important;
    color: ${colors.color_black} !important;
    opacity: 0.7;
  }
  &:disabled {
    background-color: ${colors.color_white} !important;
    color: ${colors.color_gray_mid} !important;
    opacity: 0.5;
  }
  &:disabled:hover {
    background-color: ${colors.color_white} !important;
    color: ${colors.color_gray_mid} !important;
    opacity: 0.8;
  }
`;
