import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallBack from 'src/components/Error/BoundaryFallBack';

const boundaryErrorHandler = (error: Error, info: { componentStack: string }) => {
  console.error('Boundary Error Handler Message', error);
  console.error('Boundary Error Handler Component Stack', info?.componentStack);
};

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallBack}
      onError={boundaryErrorHandler}
      onReset={() => {
        window.location.reload();
      }}
    >
      Pages CV VMH ReactJS
    </ErrorBoundary>
  );
};

export default App;
