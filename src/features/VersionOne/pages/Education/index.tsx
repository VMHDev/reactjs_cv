import React from 'react';
import { useTranslation } from 'react-i18next';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';
import Text from 'src/components/Custom/Text';

const Contact = () => {
  const { t } = useTranslation(['education']);
  return (
    <LayoutMain>
      <ContainerMain isFullHeight>
        <Text>{t('EDUCATION.TITLE')}</Text>
        <Text>{t('EDUCATION.BACHELOR')}</Text>
        <Text>{t('EDUCATION.BACHELOR_DURATION')}</Text>
        <Text>{t('EDUCATION.BACHELOR_SCHOOL')}</Text>
        <Text>{t('EDUCATION.BACHELOR_GPA')}</Text>
        <Text>{t('EDUCATION.ASSOCIATE')}</Text>
        <Text>{t('EDUCATION.ASSOCIATE_DURATION')}</Text>
        <Text>{t('EDUCATION.ASSOCIATE_SCHOOL')}</Text>
        <Text>{t('EDUCATION.ASSOCIATE_GPA')}</Text>
        <Text>{t('EDUCATION.JAVA')}</Text>
        <Text>{t('EDUCATION.JAVA_DURATION')}</Text>
        <Text>{t('EDUCATION.JAVA_SCHOOL')}</Text>
        <Text>{t('EDUCATION.JAVA_GPA')}</Text>
        <Text>{t('EDUCATION.ASSEMBLY')}</Text>
        <Text>{t('EDUCATION.ASSEMBLY_DURATION')}</Text>
        <Text>{t('EDUCATION.ASSEMBLY_SCHOOL')}</Text>
        <Text>{t('EDUCATION.ASSEMBLY_GPA')}</Text>
      </ContainerMain>
    </LayoutMain>
  );
};

export default Contact;
