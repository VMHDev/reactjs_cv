import React, { memo } from 'react';

import ProgessView from 'src/components/Custom/Progress/ProgressStep/ProgressView';
import StepView from 'src/components/Custom/Progress/ProgressStep/ProgressStep';

import {
  ProgessHeaderStyled,
  ContentHeaderMobileStyled,
  ContentHeaderTitleStyled,
  ViewTitleStyled,
  StepViewTabletStyled,
} from './styled';

interface ProgressHeaderProps {
  title: string;
  currentStep: number;
  maxStep: number;
  progresStyle?: string;
  containerStyle?: string;
  stepViewStyle?: string;
  isShowProgressBar?: boolean;
  isShowStep?: boolean;
  classNameContainer?: string;
}

const ProgressHeader = (props: ProgressHeaderProps) => {
  const {
    title,
    currentStep,
    maxStep,
    progresStyle,
    containerStyle,
    stepViewStyle,
    isShowProgressBar = true,
    isShowStep = true,
    classNameContainer = '',
  } = props;

  return (
    <div className={classNameContainer}>
      <ProgessHeaderStyled className={containerStyle}>
        <ContentHeaderMobileStyled>
          <StepView isShowStep={isShowStep} currentStep={currentStep} maxStep={maxStep} />
        </ContentHeaderMobileStyled>
        <ContentHeaderTitleStyled>
          <ViewTitleStyled>{title}</ViewTitleStyled>
          <StepViewTabletStyled className={stepViewStyle}>
            <StepView isShowStep={isShowStep} currentStep={currentStep} maxStep={maxStep} />
          </StepViewTabletStyled>
        </ContentHeaderTitleStyled>
      </ProgessHeaderStyled>
      <ProgessView
        isShowProgressBar={isShowProgressBar}
        currentStep={currentStep}
        maxStep={maxStep}
        className={progresStyle}
      />
    </div>
  );
};
export default memo(ProgressHeader);
