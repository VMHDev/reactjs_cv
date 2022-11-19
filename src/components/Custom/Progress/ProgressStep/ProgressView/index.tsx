import React, { memo } from 'react';
import components from 'src/styles/variables/components';
import { ProgessViewStyled } from './styled';

interface ProgessViewProps {
  className?: string;
  currentStep: number;
  maxStep: number;
  isShowProgressBar: boolean;
}

const ProgessView = (props: ProgessViewProps) => {
  const { className, currentStep, maxStep, isShowProgressBar } = props;

  return (
    <ProgessViewStyled
      className={className}
      style={{
        width: `${(currentStep * 100) / maxStep}%`,
        display: isShowProgressBar ? components.display_none : components.display_none,
      }}
    />
  );
};

export default memo(ProgessView);
