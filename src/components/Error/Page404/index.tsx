import React from 'react';
import { useTranslation } from 'react-i18next';
import { ROOT } from 'src/layout/constants/url';

import MainContainer from 'src/layout/components/Container';
import ButtonLink from 'src/components/Antd/Button/ButtonLink';
import Image from 'src/components/Custom/Image';

import PageNotFoundImage from 'src/assets/images/PageNotFound.png';
import { ConatainerPageError } from 'src/styles/commons/layout.styled';

const PageNotFound = () => {
  const { t } = useTranslation(['errors']);
  const stateUserInfo = { isAuthorize: true };
  const redirectPage = () => {
    let urlHomePage = '/';
    if (stateUserInfo?.isAuthorize) {
      urlHomePage = ROOT.DASHBOARD;
    }
    window.location.href = urlHomePage;
  };

  return (
    <MainContainer isFullHeightNoneHeader isCenterPage>
      <ConatainerPageError>
        <Image className="icon" src={PageNotFoundImage} alt="not-found" />
        <ButtonLink className="link" onClick={redirectPage}>
          {t('ERROR.GO_HOME')}
        </ButtonLink>
      </ConatainerPageError>
    </MainContainer>
  );
};

export default PageNotFound;
