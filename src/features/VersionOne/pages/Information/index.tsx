import React from 'react';
import { useTranslation } from 'react-i18next';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';
import Text from 'src/components/Custom/Text';

const InformationPage = () => {
  const { t } = useTranslation(['information']);
  return (
    <LayoutMain>
      <ContainerMain isFullHeight>
        <Text>{t('INFORMATION.TITLE')}</Text>
        <Text>{t('INFORMATION.DESC_ONE')}</Text>
        <Text>{t('INFORMATION.DESC_TWO')}</Text>
        <Text>{t('INFORMATION.DESC_THREE')}</Text>
      </ContainerMain>
    </LayoutMain>
  );
};

export default InformationPage;
