import styled from 'styled-components';
import fonts from 'src/styles/variables/fonts';
import colors from 'src/styles/variables/colors';

import Text from 'src/components/Custom/Text';

export const OtpContainerStyled = styled.div`
  position: relative;
  padding: 2rem 0.5rem 2rem 1.5rem;
  margin: 2rem 0 0 0;
  color: var(--color_white);
  background-color: var(--color_grey_dark);
  border: 1px solid var(--color_grey_light) !important;
  border-radius: 0.6rem;
`;

export const OtpTitleStyled = styled(Text)`
  font-size: ${fonts.font_size_medium};
  font-weight: ${fonts.font_weight_normal};
`;

export const OtpInputStyled = styled.div`
  .otpInput {
    width: 100% !important;
    height: 4.8rem;
    font-size: ${fonts.font_size_medium};
    color: ${colors.color_black};
    background-color: ${colors.color_white};
    border: 1px solid var(--color_grey_light) !important;
    border-radius: 0.4rem;
    margin-top: 1rem;
    margin-right: 1rem;
  }
  .otpSeparator {
    width: 0rem;
  }
`;

export const ErrorMessageStyled = styled.div`
  margin-top: 1.5rem;
  color: ${colors.color_red};
  text-align: center;
`;
