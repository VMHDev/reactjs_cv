import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';

import Text from 'src/components/Custom/Text';
import ButtonPrimary from 'src/components/Antd/Button/ButtonPrimary';
import ButtonSecondary from 'src/components/Antd/Button/ButtonSecondary';

export const ContainerLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const OtpTimeoutStyled = styled(Text)`
  font-size: ${fonts.font_size_small};
  font-weight: ${fonts.font_weight_normal};
  padding-top: 1rem;
  text-align: center;
`;

export const ButtonResendStyled = styled(ButtonSecondary)`
  border-color: var(--color_green);
  margin-top: 2rem;
  background-color: var(--color_white) !important;
  color: var(--color_dark) !important;
  font-weight: ${fonts.font_weight_medium};

  &:disabled {
    border-color: var(--color_grey_dark);
  }
`;

export const DividerStyled = styled.div`
  .divider {
    background-color: var(--color_grey_light);
    margin: 1.2rem 0 !important;
  }
  .dividerNone {
    border: none !important;
    margin: 1.2rem 0 !important;
  }
`;

export const ButtonConfirmStyled = styled(ButtonPrimary)`
  margin: 1rem 0;
  font-weight: ${fonts.font_weight_medium};
`;
