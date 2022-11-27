import React from 'react';
import { useTranslation } from 'react-i18next';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';
import Text from 'src/components/Custom/Text';

const Dashboard = () => {
  const { t } = useTranslation(['dashboard']);
  return (
    <LayoutMain>
      <ContainerMain isFullHeight>
        <Text>{t('DASHBOARD.DESC_ONE')}</Text>
        <Text>{t('DASHBOARD.DESC_TWO')}</Text>
      </ContainerMain>
    </LayoutMain>
  );
};

export default Dashboard;
