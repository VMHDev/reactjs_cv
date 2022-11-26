import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import components from 'src/styles/variables/components';
import { Button } from 'antd';

export const ButtonPrimaryStyled = styled(Button)<{ $isLoading: boolean }>`
  height: ${components.height_button} !important;
  transition: all 0.3s linear;
  white-space: normal;

  font-size: ${fonts.font_size_large} !important;
  font-weight: ${fonts.font_weight_medium} !important;
  line-height: ${fonts.font_line_height_normal} !important;

  color: var(--color_black) !important;
  background-color: var(--color_main) !important;
  border: none !important;
  border-radius: 0.4rem !important;

  cursor: ${(props: any) => (props.$isLoading ? 'not-allowed' : 'default')} !important;

  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.7;
  }
  &:disabled:hover {
    opacity: 0.8;
  }
`;
