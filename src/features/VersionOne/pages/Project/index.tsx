import React from 'react';
import { useTranslation } from 'react-i18next';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';
import Text from 'src/components/Custom/Text';

const ProjectPage = () => {
  const { t } = useTranslation(['project']);
  return (
    <LayoutMain>
      <ContainerMain isFullHeight>
        <Text>{t('PROJECT.TITLE')}</Text>
        <Text>{t('PROJECT.WINDOWS_FORM')}</Text>
        <Text>{t('PROJECT.WINDOWS_FORM_DESC')}</Text>
        <Text>{t('PROJECT.ASP_NET')}</Text>
        <Text>{t('PROJECT.ASP_NET_DESC')}</Text>
        <Text>{t('PROJECT.WPF')}</Text>
        <Text>{t('PROJECT.WPF_DESC')}</Text>
        <Text>{t('PROJECT.PHP_LARAVEL')}</Text>
        <Text>{t('PROJECT.PHP_LARAVEL_DESC')}</Text>
        <Text>{t('PROJECT.ANDROID_JAVA')}</Text>
        <Text>{t('PROJECT.ANDROID_JAVA_DESC')}</Text>
        <Text>{t('PROJECT.JAVA_SWING')}</Text>
        <Text>{t('PROJECT.JAVA_SWING_DESC')}</Text>
        <Text>{t('PROJECT.PYTHON_JUPYTER_NOTEBOOK')}</Text>
        <Text>{t('PROJECT.PYTHON_JUPYTER_NOTEBOOK_DESC')}</Text>
        <Text>{t('PROJECT.PYTHON_FLASK')}</Text>
        <Text>{t('PROJECT.PYTHON_FLASK_DESC')}</Text>
        <Text>{t('PROJECT.C_CPLUS')}</Text>
        <Text>{t('PROJECT.C_CPLUS_DESC')}</Text>
        <Text>{t('PROJECT.R')}</Text>
        <Text>{t('PROJECT.R_DESC')}</Text>
      </ContainerMain>
    </LayoutMain>
  );
};

export default ProjectPage;
