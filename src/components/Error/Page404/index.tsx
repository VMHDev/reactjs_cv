import React from 'react';
import { useTranslation } from 'react-i18next';
import { ROOT } from 'src/layout/constants/url';

import MainContainer from 'src/layout/components/ContainerMain';
import AntdButtonLink from 'src/components/Antd/Button/ButtonLink';
import Image from 'src/components/Custom/Image';

import PageNotFoundImage from 'src/assets/images/PageNotFound.png';
import { ConatainerPageError } from 'src/styles/commons/styled/layout.styled';

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
        <AntdButtonLink className="link" onClick={redirectPage}>
          {t('ERROR.GO_HOME')}
        </AntdButtonLink>
      </ConatainerPageError>
    </MainContainer>
  );
};

export default PageNotFound;
