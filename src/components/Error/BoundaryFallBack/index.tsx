import React from 'react';
import { useTranslation } from 'react-i18next';
import MainContainer from 'src/layout/components/Container';

import PageBrokenImage from 'src/assets/images/PageBroken.png';
import { MainContainerStyled } from 'src/styles/commons/container.styled';

interface ErrorBoundaryFallBackProps {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

const ErrorBoundaryFallBack = (props: ErrorBoundaryFallBackProps) => {
  const { error, resetErrorBoundary } = props;
  const { t } = useTranslation(['errors']);
  const redirectPage = () => {
    window.location.href = '/';
  };

  return (
    <MainContainer isFullHeight isCenterPage>
      <MainContainerStyled>
        <img src={PageBrokenImage} alt="page-broken" />
        <div>{error.message}</div>
        <button className="button" onClick={resetErrorBoundary}>
          {t('ERROR.TRY_AGAIN')}
        </button>
        <button onClick={redirectPage}>{t('ERROR.GO_HOME')}</button>
      </MainContainerStyled>
    </MainContainer>
  );
};

export default ErrorBoundaryFallBack;
