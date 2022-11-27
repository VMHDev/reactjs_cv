import React from 'react';
import { useTranslation } from 'react-i18next';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';
import Text from 'src/components/Custom/Text';

const SkillPage = () => {
  const { t } = useTranslation(['skill']);
  return (
    <LayoutMain>
      <ContainerMain isFullHeight>
        <Text>{t('SKILL.TITLE')}</Text>
        <Text>{t('SKILL.PROGRAMING_LANGUAGE')}</Text>
        <Text>{t('SKILL.DATABASE')}</Text>
        <Text>{t('SKILL.WEB')}</Text>
        <Text>{t('SKILL.MOBILE')}</Text>
        <Text>{t('SKILL.TOOL')}</Text>
      </ContainerMain>
    </LayoutMain>
  );
};

export default SkillPage;
