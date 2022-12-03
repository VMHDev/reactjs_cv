import colors from 'src/styles/variables/colors';

export interface SkillItem {
  title: string;
  percent: number;
  color: string;
}

export const LIST_SKILL_PL: Array<SkillItem> = [
  {
    title: 'C#',
    percent: 65,
    color: colors.color_blue,
  },
  {
    title: 'Javascript',
    percent: 70,
    color: colors.color_red,
  },
  {
    title: 'Typescript',
    percent: 70,
    color: colors.color_violet,
  },
  {
    title: 'Python',
    percent: 35,
    color: colors.color_yellow,
  },
  {
    title: 'Java',
    percent: 30,
    color: colors.color_orange,
  },
  {
    title: 'Python',
    percent: 35,
    color: colors.color_green,
  },
];

export const LIST_SKILL_DB: Array<SkillItem> = [
  {
    title: 'Microsoft SQL Server',
    percent: 80,
    color: colors.color_blue,
  },
  {
    title: 'Oracle DB',
    percent: 50,
    color: colors.color_red,
  },
  {
    title: 'My SQL',
    percent: 60,
    color: colors.color_green,
  },
  {
    title: 'PostgreSQL',
    percent: 40,
    color: colors.color_yellow,
  },
  {
    title: 'MongoDB',
    percent: 30,
    color: colors.color_orange,
  },
];

export const LIST_SKILL_WM: Array<SkillItem> = [
  {
    title: 'ReactJS',
    percent: 90,
    color: colors.color_green,
  },
  {
    title: 'VueJS',
    percent: 40,
    color: colors.color_yellow,
  },
  {
    title: 'React Native',
    percent: 30,
    color: colors.color_orange,
  },
  {
    title: 'Antd Design',
    percent: 70,
    color: colors.color_blue,
  },
  {
    title: 'Less CSS',
    percent: 70,
    color: colors.color_red,
  },
  {
    title: 'SCSS',
    percent: 80,
    color: colors.color_violet,
  },
  {
    title: 'Styled Components',
    percent: 60,
    color: colors.color_blue,
  },
];

export const LIST_SKILL_BE: Array<SkillItem> = [
  {
    title: '.NET Framework',
    percent: 80,
    color: colors.color_blue,
  },
  {
    title: '.NET Core',
    percent: 50,
    color: colors.color_red,
  },
  {
    title: 'NodeJS',
    percent: 40,
    color: colors.color_green,
  },
];

export const LIST_SKILL_DK: Array<SkillItem> = [
  {
    title: 'Winform',
    percent: 80,
    color: colors.color_blue,
  },
  {
    title: 'DevExpress',
    percent: 60,
    color: colors.color_red,
  },
  {
    title: 'WPF',
    percent: 40,
    color: colors.color_green,
  },
];

export const LIST_SKILL_TL: Array<SkillItem> = [
  {
    title: 'Visual Studio',
    percent: 80,
    color: colors.color_blue,
  },
  {
    title: 'Visual Code',
    percent: 90,
    color: colors.color_red,
  },
  {
    title: 'SQL Server Management Studio',
    percent: 80,
    color: colors.color_green,
  },
  {
    title: 'DBeaver',
    percent: 60,
    color: colors.color_yellow,
  },
  {
    title: 'SoureTree',
    percent: 80,
    color: colors.color_orange,
  },
  {
    title: 'Git',
    percent: 80,
    color: colors.color_violet,
  },
  {
    title: 'Android Studio',
    percent: 30,
    color: colors.color_blue,
  },
  {
    title: 'XCode',
    percent: 30,
    color: colors.color_red,
  },
];
