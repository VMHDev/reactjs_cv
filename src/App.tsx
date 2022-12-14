import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallBack from 'src/components/Error/BoundaryFallBack';

import { useAppSelector } from 'src/redux/hooks';
import { THEME } from 'src/layout/constants/commons';

import { colorsDark, colorsLight } from './styles/variables/colors';
import fonts from './styles/variables/fonts';
import GlobalStyled from 'src/styles/global.styled';
import AppRouter from 'src/routers';

const boundaryErrorHandler = (error: Error, info: { componentStack: string }) => {
  console.error('Boundary Error Handler Message', error);
  console.error('Boundary Error Handler Component Stack', info?.componentStack);
};

const App = () => {
  const { i18n } = useTranslation();

  const stateTheme = useAppSelector((state) => state?.layout?.theme);
  const stateLanguage = useAppSelector((state) => state?.layout?.language);

  useEffect(() => {
    i18n.changeLanguage(stateLanguage);
  }, [stateLanguage]);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallBack}
      onError={boundaryErrorHandler}
      onReset={() => {
        window.location.reload();
      }}
    >
      <GlobalStyled color={stateTheme === THEME.DARK ? colorsDark : colorsLight} font={fonts} />
      <AppRouter />
    </ErrorBoundary>
  );
};

export default App;
