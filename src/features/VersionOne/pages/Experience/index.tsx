import React from 'react';
import { useTranslation } from 'react-i18next';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';
import Text from 'src/components/Custom/Text';

const ExperiencePage = () => {
  const { t } = useTranslation(['experience']);
  return (
    <LayoutMain>
      <ContainerMain isFullHeight>
        <Text>{t('EXPERIENCE.TITLE')}</Text>
        <Text>{t('EXPERIENCE.ITV_DURATION')}</Text>
        <Text>{t('EXPERIENCE.ITV_POSITION')}</Text>
        <Text>{t('EXPERIENCE.ITV_DESC')}</Text>
        <Text>{t('EXPERIENCE.ITV_ADDRESS')}</Text>
        <Text>{t('EXPERIENCE.ITV_WEB')}</Text>
        <Text>{t('EXPERIENCE.ITV_PHONE')}</Text>
        <Text>{t('EXPERIENCE.ITV_TECHNOLOGIES')}</Text>
        <Text>{t('EXPERIENCE.ITV_LANGUAGES')}</Text>
        <Text>{t('EXPERIENCE.ITV_DATABASE')}</Text>
        <Text>{t('EXPERIENCE.ITV_TOOL')}</Text>

        <Text>{t('EXPERIENCE.PMV_DURATION')}</Text>
        <Text>{t('EXPERIENCE.PMV_POSITION')}</Text>
        <Text>{t('EXPERIENCE.PMV_DESC')}</Text>
        <Text>{t('EXPERIENCE.PMV_ADDRESS')}</Text>
        <Text>{t('EXPERIENCE.PMV_WEB')}</Text>
        <Text>{t('EXPERIENCE.PMV_PHONE')}</Text>
        <Text>{t('EXPERIENCE.PMV_TECHNOLOGIES')}</Text>
        <Text>{t('EXPERIENCE.PMV_LANGUAGES')}</Text>
        <Text>{t('EXPERIENCE.PMV_DATABASE')}</Text>
        <Text>{t('EXPERIENCE.PMV_TOOL')}</Text>

        <Text>{t('EXPERIENCE.TPS_DURATION')}</Text>
        <Text>{t('EXPERIENCE.TPS_POSITION')}</Text>
        <Text>{t('EXPERIENCE.TPS_DESC')}</Text>
        <Text>{t('EXPERIENCE.TPS_ADDRESS')}</Text>
        <Text>{t('EXPERIENCE.TPS_WEB')}</Text>
        <Text>{t('EXPERIENCE.TPS_PHONE')}</Text>
        <Text>{t('EXPERIENCE.TPS_TECHNOLOGIES')}</Text>
        <Text>{t('EXPERIENCE.TPS_LANGUAGES')}</Text>
        <Text>{t('EXPERIENCE.TPS_DATABASE')}</Text>
        <Text>{t('EXPERIENCE.TPS_TOOL')}</Text>

        <Text>{t('EXPERIENCE.MWG_DURATION')}</Text>
        <Text>{t('EXPERIENCE.MWG_POSITION')}</Text>
        <Text>{t('EXPERIENCE.MWG_DESC')}</Text>
        <Text>{t('EXPERIENCE.MWG_ADDRESS')}</Text>
        <Text>{t('EXPERIENCE.MWG_WEB')}</Text>
        <Text>{t('EXPERIENCE.MWG_PHONE')}</Text>
        <Text>{t('EXPERIENCE.MWG_TECHNOLOGIES')}</Text>
        <Text>{t('EXPERIENCE.MWG_LANGUAGES')}</Text>
        <Text>{t('EXPERIENCE.MWG_DATABASE')}</Text>
        <Text>{t('EXPERIENCE.MWG_TOOL')}</Text>

        <Text>{t('EXPERIENCE.FJN_DURATION')}</Text>
        <Text>{t('EXPERIENCE.FJN_POSITION')}</Text>
        <Text>{t('EXPERIENCE.FJN_DESC')}</Text>
        <Text>{t('EXPERIENCE.FJN_ADDRESS')}</Text>
        <Text>{t('EXPERIENCE.FJN_WEB')}</Text>
        <Text>{t('EXPERIENCE.FJN_PHONE')}</Text>
        <Text>{t('EXPERIENCE.FJN_TECHNOLOGIES')}</Text>
        <Text>{t('EXPERIENCE.FJN_LANGUAGES')}</Text>
        <Text>{t('EXPERIENCE.FJN_DATABASE')}</Text>
        <Text>{t('EXPERIENCE.FJN_TOOL')}</Text>
      </ContainerMain>
    </LayoutMain>
  );
};

export default ExperiencePage;
