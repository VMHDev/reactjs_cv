import React, { memo } from 'react';
import styleVaribales from 'src/styles/export/variables.module.scss';
import { StepViewStyled, StepTextStyled } from './styled';

interface StepViewProps {
  currentStep: number;
  maxStep: number;
  isShowStep: boolean;
}

const StepView = (props: StepViewProps) => {
  const { currentStep, maxStep, isShowStep } = props;
  return (
    <div
      style={{
        display: isShowStep ? styleVaribales.displayBlock : styleVaribales.displayNone,
      }}
    >
      <StepViewStyled>
        <StepTextStyled>
          {currentStep} / {maxStep} steps
        </StepTextStyled>
      </StepViewStyled>
    </div>
  );
};

export default memo(StepView);
