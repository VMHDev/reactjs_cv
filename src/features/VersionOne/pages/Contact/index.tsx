import React from 'react';
import { useTranslation } from 'react-i18next';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';
import Text from 'src/components/Custom/Text';

const Contact = () => {
  const { t } = useTranslation(['contact']);
  return (
    <LayoutMain>
      <ContainerMain isFullHeight>
        <Text>{t('CONTACT.TITLE')}</Text>
        <Text>{t('CONTACT.EMAIL')}</Text>
        <Text>{t('CONTACT.ADDRESS')}</Text>
        <Text>{t('CONTACT.PHONE')}</Text>
      </ContainerMain>
    </LayoutMain>
  );
};

export default Contact;
