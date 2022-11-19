import React from 'react';
import { useTranslation } from 'react-i18next';
import OtpInput from 'react-otp-input';

import { OTP_DURATION } from 'src/constants/commons';
import { formatterOTP } from 'src/utils/strings';

import { OtpContainerStyled, OtpTitleStyled, OtpInputStyled, ErrorMessageStyled } from './styled';

interface InputOtpProps {
  otpValue: string;
  countTime: number;
  isStart: boolean;
  numInputs?: number;
  textTitle?: string;
  errorMessage?: string;
  onChangeCustom: (value: string) => void;
}

const InputOtp = (props: InputOtpProps) => {
  const {
    otpValue,
    countTime = OTP_DURATION.TIME_OUT_MAX,
    isStart,
    numInputs = 6,
    textTitle,
    errorMessage,
    onChangeCustom = () => null,
  } = props;

  const { t } = useTranslation(['commons']);

  return (
    <OtpContainerStyled>
      <OtpTitleStyled>{textTitle ? textTitle : t('OTP.TITLE')}</OtpTitleStyled>
      <OtpInputStyled>
        <OtpInput
          isDisabled={countTime == 0 || !isStart}
          shouldAutoFocus
          inputStyle="otpInput"
          value={formatterOTP(otpValue)}
          onChange={onChangeCustom}
          numInputs={numInputs}
          isInputNum={true}
          separator={<div className="otpSeparator" />}
        />
      </OtpInputStyled>

      {errorMessage && <ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>}
    </OtpContainerStyled>
  );
};

export default React.memo(InputOtp);
