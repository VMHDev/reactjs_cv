import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Divider } from 'antd';

import { OTP_DURATION } from 'src/constants/commons';
import { formatterOTP } from 'src/utils/strings';

import InputOtp from 'src/components/Custom/FormFields/InputOtp';

import {
  ContainerLayoutStyled,
  OtpTimeoutStyled,
  ButtonResendStyled,
  DividerStyled,
  ButtonConfirmStyled,
} from './styled';

interface OTPFormProps {
  otpValue: string;
  isStart: boolean;
  isLoadingResend: boolean;
  isLoadingSubmit: boolean;
  textTitle?: string;
  textTimeout?: string;
  textButtonSubmit?: string;
  textButtonResend?: string;
  errorMessage?: string;
  classNameContent?: string;
  isShowDivider?: boolean;
  setOtpValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (otp: string) => void;
  onResend: () => void;
}

const OTPForm = (props: OTPFormProps) => {
  const {
    otpValue = '',
    isStart,
    isLoadingResend,
    isLoadingSubmit,
    textTitle,
    textTimeout,
    textButtonSubmit,
    textButtonResend,
    errorMessage,
    classNameContent = '',
    isShowDivider = true,
    setOtpValue,
    onSubmit,
    onResend,
  } = props;

  const { t } = useTranslation(['commons']);
  const [countTime, setCountTime] = useState(OTP_DURATION.TIME_OUT_MAX);
  const disableResendOTP = countTime > OTP_DURATION.TIME_OUT_MIN;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (countTime > OTP_DURATION.TIME_OUT_MIN && isStart) {
        setCountTime(countTime - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [countTime, isStart]);

  useEffect(() => {
    if (isStart) {
      setCountTime(OTP_DURATION.TIME_OUT_MAX);
      setOtpValue('');
    }
  }, [isStart]);

  const confirmOTP = () => {
    onSubmit(otpValue);
  };

  return (
    <ContainerLayoutStyled>
      <div className={classNameContent}>
        <InputOtp
          otpValue={otpValue}
          countTime={countTime}
          isStart={isStart}
          textTitle={textTitle}
          errorMessage={errorMessage}
          onChangeCustom={setOtpValue}
        />
        <OtpTimeoutStyled>
          {textTimeout ? textTimeout : t('OTP.TIMEOUT', { time: countTime })}
        </OtpTimeoutStyled>
        <ButtonResendStyled
          onClick={onResend}
          disabled={disableResendOTP}
          loading={isLoadingResend}
        >
          {textButtonResend ? textButtonResend : t('OTP.BTN_RESEND')}
        </ButtonResendStyled>
        <DividerStyled>
          <Divider className={isShowDivider ? 'divider' : 'dividerNone'} />
        </DividerStyled>

        <ButtonConfirmStyled
          htmlType="submit"
          loading={isLoadingSubmit}
          disabled={formatterOTP(otpValue).length < 6 || countTime === 0}
          onClick={confirmOTP}
        >
          {textButtonSubmit ? textButtonSubmit : t('OTP.BTN_CONFIRM')}
        </ButtonConfirmStyled>
      </div>
    </ContainerLayoutStyled>
  );
};

export default React.memo(OTPForm);
