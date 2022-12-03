import React from 'react';
import { useTranslation } from 'react-i18next';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';

import IconEductionOne from 'src/assets/icons/education/EductionOne.png';
import IconEductionTwo from 'src/assets/icons/education/EductionTwo.png';
import IconEductionThree from 'src/assets/icons/education/EductionThree.png';
import IconEductionFour from 'src/assets/icons/education/EductionFour.png';

import { TitleStyled, DescStyled } from 'src/styles/commons/styled/text.styled';
import { HeaderStyled, StepsStyled, TitleContentStyled, IconCustomStyled } from './styled';

interface EductionItem {
  title: string;
  duration: string;
  school: string;
  gpa: string;
  icon: React.ReactNode;
}

const Contact = () => {
  const { t } = useTranslation(['education']);

  const ListItem: Array<EductionItem> = [
    {
      title: t('EDUCATION.BACHELOR'),
      duration: t('EDUCATION.BACHELOR_DURATION'),
      school: t('EDUCATION.BACHELOR_SCHOOL'),
      gpa: t('EDUCATION.BACHELOR_GPA'),
      icon: <IconCustomStyled iconSource={IconEductionOne} />,
    },
    {
      title: t('EDUCATION.ASSOCIATE'),
      duration: t('EDUCATION.ASSOCIATE_DURATION'),
      school: t('EDUCATION.ASSOCIATE_SCHOOL'),
      gpa: t('EDUCATION.ASSOCIATE_GPA'),
      icon: <IconCustomStyled iconSource={IconEductionTwo} />,
    },
    {
      title: t('EDUCATION.JAVA'),
      duration: t('EDUCATION.JAVA_DURATION'),
      school: t('EDUCATION.JAVA_SCHOOL'),
      gpa: t('EDUCATION.JAVA_GPA'),
      icon: <IconCustomStyled iconSource={IconEductionThree} />,
    },
    {
      title: t('EDUCATION.ASSEMBLY'),
      duration: t('EDUCATION.ASSEMBLY_DURATION'),
      school: t('EDUCATION.ASSEMBLY_SCHOOL'),
      gpa: t('EDUCATION.ASSEMBLY_GPA'),
      icon: <IconCustomStyled iconSource={IconEductionFour} />,
    },
  ];

  const RenderGUITitle = ({ title, duration }: { title: string; duration: string }) => {
    return (
      <TitleContentStyled>
        <TitleStyled>{title}</TitleStyled>
        <TitleStyled>{duration}</TitleStyled>
      </TitleContentStyled>
    );
  };

  const RenderGUIDesc = ({ school, gpa }: { school: string; gpa: string }) => {
    return (
      <>
        <DescStyled>{school}</DescStyled>
        <DescStyled>{gpa}</DescStyled>
      </>
    );
  };

  return (
    <LayoutMain>
      <ContainerMain isFullHeight isCenterPage>
        <HeaderStyled>{t('EDUCATION.TITLE')}</HeaderStyled>
        <StepsStyled
          direction="vertical"
          items={ListItem.map((item: EductionItem) => {
            return {
              title: <RenderGUITitle title={item.title} duration={item.duration} />,
              description: <RenderGUIDesc school={item.school} gpa={item.gpa} />,
              icon: item.icon,
            };
          })}
        />
      </ContainerMain>
    </LayoutMain>
  );
};

export default Contact;
