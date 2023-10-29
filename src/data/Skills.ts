import colors from 'src/styles/variables/colors';

import IconCSharp from 'src/assets/icons/skill/CSharp.png';
import IconJS from 'src/assets/icons/skill/JS.png';
import IconTS from 'src/assets/icons/skill/TS.png';
import IconJava from 'src/assets/icons/skill/Java.png';
import IconPython from 'src/assets/icons/skill/Python.png';
import IconCPlus from 'src/assets/icons/skill/CPlus.png';

import IconOracleDB from 'src/assets/icons/skill/OracleDB.png';
import IconMySQL from 'src/assets/icons/skill/MySQL.png';
import IconSQLServer from 'src/assets/icons/skill/SQLServer.png';
import IconMongoDB from 'src/assets/icons/skill/MongoDB.png';
import IconPostgresql from 'src/assets/icons/skill/Postgresql.png';

import IconReactJS from 'src/assets/icons/skill/ReactJS.png';
import IconReactNative from 'src/assets/icons/skill/ReactNative.png';
import IconScss from 'src/assets/icons/skill/Scss.png';
import IconStyledComponents from 'src/assets/icons/skill/StyledComponents.png';
import IconVueJS from 'src/assets/icons/skill/VueJS.png';
import IconAntd from 'src/assets/icons/skill/Antd.png';
import IconLess from 'src/assets/icons/skill/Less.png';

import IconNetFramework from 'src/assets/icons/skill/NetFramework.png';
import IconNodeJS from 'src/assets/icons/skill/NodeJS.png';
import IconNetCore from 'src/assets/icons/skill/NetCore.png';

import IconDevexpress from 'src/assets/icons/skill/Devexpress.png';
import IconWinform from 'src/assets/icons/skill/Winform.png';
import IconWPF from 'src/assets/icons/skill/WPF.png';

import IconVisualStudio from 'src/assets/icons/skill/VisualStudio.png';
import IconVisualCode from 'src/assets/icons/skill/VisualCode.png';
import IconSSMS from 'src/assets/icons/skill/SSMS.png';
import IconSourcetree from 'src/assets/icons/skill/Sourcetree.png';
import IconGit from 'src/assets/icons/skill/Git.png';
import IconDBeaver from 'src/assets/icons/skill/DBeaver.png';
import IconAndroidStudio from 'src/assets/icons/skill/AndroidStudio.png';
import IconXcode from 'src/assets/icons/skill/Xcode.png';

export interface SkillItem {
  title: string;
  percent: number;
  color: string;
  icon: string;
}

export const LIST_SKILL_PL: Array<SkillItem> = [
  {
    title: 'C#',
    percent: 65,
    color: colors.color_blue,
    icon: IconCSharp,
  },
  {
    title: 'Javascript',
    percent: 70,
    color: colors.color_red,
    icon: IconJS,
  },
  {
    title: 'Typescript',
    percent: 70,
    color: colors.color_violet,
    icon: IconTS,
  },
  {
    title: 'Python',
    percent: 35,
    color: colors.color_yellow,
    icon: IconPython,
  },
  {
    title: 'Java',
    percent: 30,
    color: colors.color_orange,
    icon: IconJava,
  },
  {
    title: 'C/C++',
    percent: 35,
    color: colors.color_green,
    icon: IconCPlus,
  },
];

export const LIST_SKILL_DB: Array<SkillItem> = [
  {
    title: 'Microsoft SQL Server',
    percent: 80,
    color: colors.color_blue,
    icon: IconSQLServer,
  },
  {
    title: 'Oracle DB',
    percent: 50,
    color: colors.color_red,
    icon: IconOracleDB,
  },
  {
    title: 'My SQL',
    percent: 60,
    color: colors.color_green,
    icon: IconMySQL,
  },
  {
    title: 'PostgreSQL',
    percent: 40,
    color: colors.color_yellow,
    icon: IconPostgresql,
  },
  {
    title: 'MongoDB',
    percent: 30,
    color: colors.color_orange,
    icon: IconMongoDB,
  },
];

export const LIST_SKILL_WM: Array<SkillItem> = [
  {
    title: 'ReactJS',
    percent: 90,
    color: colors.color_green,
    icon: IconReactJS,
  },
  {
    title: 'VueJS',
    percent: 40,
    color: colors.color_yellow,
    icon: IconVueJS,
  },
  {
    title: 'React Native',
    percent: 30,
    color: colors.color_orange,
    icon: IconReactNative,
  },
  {
    title: 'Antd Design',
    percent: 70,
    color: colors.color_blue,
    icon: IconAntd,
  },
  {
    title: 'Less CSS',
    percent: 70,
    color: colors.color_red,
    icon: IconLess,
  },
  {
    title: 'SCSS',
    percent: 80,
    color: colors.color_violet,
    icon: IconScss,
  },
  {
    title: 'Styled Components',
    percent: 60,
    color: colors.color_blue,
    icon: IconStyledComponents,
  },
];

export const LIST_SKILL_BE: Array<SkillItem> = [
  {
    title: '.NET Framework',
    percent: 80,
    color: colors.color_blue,
    icon: IconNetFramework,
  },
  {
    title: '.NET Core',
    percent: 50,
    color: colors.color_red,
    icon: IconNetCore,
  },
  {
    title: 'NodeJS',
    percent: 40,
    color: colors.color_green,
    icon: IconNodeJS,
  },
];

export const LIST_SKILL_DK: Array<SkillItem> = [
  {
    title: 'Winform',
    percent: 80,
    color: colors.color_blue,
    icon: IconWinform,
  },
  {
    title: 'DevExpress',
    percent: 60,
    color: colors.color_red,
    icon: IconDevexpress,
  },
  {
    title: 'WPF',
    percent: 40,
    color: colors.color_green,
    icon: IconWPF,
  },
];

export const LIST_SKILL_TL: Array<SkillItem> = [
  {
    title: 'Visual Studio',
    percent: 80,
    color: colors.color_blue,
    icon: IconVisualStudio,
  },
  {
    title: 'Visual Code',
    percent: 90,
    color: colors.color_red,
    icon: IconVisualCode,
  },
  {
    title: 'SQL Server Management Studio',
    percent: 80,
    color: colors.color_green,
    icon: IconSSMS,
  },
  {
    title: 'DBeaver',
    percent: 60,
    color: colors.color_yellow,
    icon: IconDBeaver,
  },
  {
    title: 'SoureTree',
    percent: 80,
    color: colors.color_orange,
    icon: IconSourcetree,
  },
  {
    title: 'Git',
    percent: 80,
    color: colors.color_violet,
    icon: IconGit,
  },
  {
    title: 'Android Studio',
    percent: 30,
    color: colors.color_blue,
    icon: IconAndroidStudio,
  },
  {
    title: 'XCode',
    percent: 30,
    color: colors.color_red,
    icon: IconXcode,
  },
];
