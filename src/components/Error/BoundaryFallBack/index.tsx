import React from 'react';

import PageBrokenImage from 'src/assets/images/PageBroken.png';

interface ErrorBoundaryFallBackProps {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

const ErrorBoundaryFallBack = (props: ErrorBoundaryFallBackProps) => {
  const { error, resetErrorBoundary } = props;
  return (
    <>
      <img src={PageBrokenImage} alt="page-broken" />
      <div>{error.message}</div>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </>
  );
};

export default ErrorBoundaryFallBack;
