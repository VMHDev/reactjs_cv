import React from 'react';
import { useTranslation } from 'react-i18next';
import { MailOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';

import { ContentContainerStyled, TitleStyled, DescStyled } from './styled';

const Contact = () => {
  const { t } = useTranslation(['contact']);
  return (
    <LayoutMain>
      <ContainerMain isFullHeight isCenterPage>
        <TitleStyled>{t('CONTACT.TITLE')}</TitleStyled>
        <ContentContainerStyled>
          <MailOutlined className="glbIcon glbIconXl" />
          <DescStyled>{t('CONTACT.EMAIL')}</DescStyled>
        </ContentContainerStyled>
        <ContentContainerStyled>
          <EnvironmentOutlined className="glbIcon glbIconXl" />
          <DescStyled>{t('CONTACT.ADDRESS')}</DescStyled>
        </ContentContainerStyled>
        <ContentContainerStyled>
          <PhoneOutlined className="glbIcon glbIconXl" />
          <DescStyled>{t('CONTACT.PHONE')}</DescStyled>
        </ContentContainerStyled>
      </ContainerMain>
    </LayoutMain>
  );
};

export default Contact;
