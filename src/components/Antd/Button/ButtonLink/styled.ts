import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import components from 'src/styles/variables/components';
import { Button } from 'antd';

export const ButtonLinkStyled = styled(Button)<{ $isLoading: boolean }>`
  height: ${components.height_button} !important;
  transition: all 0.3s linear;
  white-space: normal;

  font-size: ${fonts.font_size_normal} !important;
  font-weight: ${fonts.font_weight_normal} !important;
  line-height: ${fonts.font_line_height_normal} !important;

  color: var(--color_main) !important;
  background-color: transparent !important;
  border: none !important;
  outline: transparent !important;
  box-shadow: none !important;

  cursor: ${(props: any) => (props.$isLoading ? 'not-allowed' : 'default')} !important;
  opacity: ${(props: any) => (props.$isLoading ? 0.2 : 1)};

  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.7;
  }
  &:disabled:hover {
    opacity: 0.8;
  }
  &:active {
    border: none !important;
    outline: transparent !important;
    box-shadow: none !important;
  }
`;

export const UnderlineGreenStyled = styled.span`
  color: var(--color_main);
  text-decoration-line: underline;
`;
