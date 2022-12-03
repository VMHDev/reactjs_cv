import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  SkillItem,
  LIST_SKILL_PL,
  LIST_SKILL_DB,
  LIST_SKILL_WM,
  LIST_SKILL_BE,
  LIST_SKILL_DK,
  LIST_SKILL_TL,
} from 'src/features/VersionOne/data/skill';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';
import AntdProgress from 'src/components/Antd/Progress';

import { TitleStyled, DescStyled } from 'src/styles/commons/styled/text.styled';
import {
  ItemLayoutStyled,
  ItemHorizontaltyled,
  ItemVerticalStyled,
  ItemTextStyled,
  IconCustomStyled,
} from './styled';

const SkillPage = () => {
  const { t } = useTranslation(['skill']);

  const RenderGUIItem = ({ item }: { item: SkillItem }) => {
    return (
      <ItemHorizontaltyled>
        <IconCustomStyled iconSource={item.icon} />
        <ItemVerticalStyled>
          <ItemTextStyled>{item.title}</ItemTextStyled>
          <AntdProgress percent={item.percent} strokeWidth={15} strokeColor={item.color} />
        </ItemVerticalStyled>
      </ItemHorizontaltyled>
    );
  };

  return (
    <LayoutMain>
      <ContainerMain isFullHeight isCenterPage>
        <TitleStyled>{t('SKILL.TITLE')}</TitleStyled>

        <DescStyled>{t('SKILL.PROGRAMING_LANGUAGE')}</DescStyled>
        <ItemLayoutStyled>
          {LIST_SKILL_PL.map((item: SkillItem, index: number) => {
            return <RenderGUIItem item={item} key={index} />;
          })}
        </ItemLayoutStyled>

        <DescStyled>{t('SKILL.DATABASE')}</DescStyled>
        <ItemLayoutStyled>
          {LIST_SKILL_DB.map((item: SkillItem, index: number) => {
            return <RenderGUIItem item={item} key={index} />;
          })}
        </ItemLayoutStyled>

        <DescStyled>{t('SKILL.WEB_MOBILE')}</DescStyled>
        <ItemLayoutStyled>
          {LIST_SKILL_WM.map((item: SkillItem, index: number) => {
            return <RenderGUIItem item={item} key={index} />;
          })}
        </ItemLayoutStyled>

        <DescStyled>{t('SKILL.BACKEND')}</DescStyled>
        <ItemLayoutStyled>
          {LIST_SKILL_BE.map((item: SkillItem, index: number) => {
            return <RenderGUIItem item={item} key={index} />;
          })}
        </ItemLayoutStyled>

        <DescStyled>{t('SKILL.DESKTOP')}</DescStyled>
        <ItemLayoutStyled>
          {LIST_SKILL_DK.map((item: SkillItem, index: number) => {
            return <RenderGUIItem item={item} key={index} />;
          })}
        </ItemLayoutStyled>

        <DescStyled>{t('SKILL.TOOL')}</DescStyled>
        <ItemLayoutStyled>
          {LIST_SKILL_TL.map((item: SkillItem, index: number) => {
            return <RenderGUIItem item={item} key={index} />;
          })}
        </ItemLayoutStyled>
      </ContainerMain>
    </LayoutMain>
  );
};

export default SkillPage;
