import { ROOT, VERSION_ONE, VERSION_THREE, GITHUB_PAGES } from 'src/layout/constants/url';
import { IContainerMenuItem, IHeaderMenuItem } from 'src/layout/types';

// Menu header
export const enum MENU_ITEM_ID {
  DASHBOARD = 1,

  VERSION_ONE = 2,
  VERSION_ONE_DASHBOARD = 21,
  VERSION_ONE_INFORMATION = 22,
  VERSION_ONE_SKILL = 23,
  VERSION_ONE_EXPERIENCE = 24,
  VERSION_ONE_EDUCATION = 25,
  VERSION_ONE_PROJECT = 26,
  VERSION_ONE_CONTACT = 27,

  VERSION_TWO = 3,

  VERSION_THREE = 4,
  VERSION_THREE_DASHBOARD = 41,

  SYSTEM = 99,
  SYSTEM_DEMO = 991,
  SYSTEM_CHANGE_TO_LIGHT_MODE = 992,
  SYSTEM_CHANGE_LANGUAGE = 993,
  SYSTEM_LOG_OUT = 994,

  SYSTEM_DEMO_GITHUBPAGES = 9911,
  SYSTEM_DEMO_GITHUBPAGES_ONE = 99111,
  SYSTEM_DEMO_GITHUBPAGES_TWO = 99112,
  SYSTEM_DEMO_GITHUBPAGES_THREE = 99113,
}

export const enum MENU_KEY {
  MAIN = 'main',
  SUB_ONE = 'sub-one',
  SUB_TWO = 'sub-two',
  SUB_THREE = 'sub-three',
  EMPTY = '',
}

export const MENU_KEY_TRANSLATION = {
  SYSTEM: 'MENU.SYSTEM.TITLE',
  DASHBOARD: 'MENU.DASHBOARD.TITLE',
  VERSION_ONE: 'MENU.VERSION_ONE.TITLE',
  VERSION_TWO: 'MENU.VERSION_TWO.TITLE',
  VERSION_THREE: 'MENU.VERSION_THREE.TITLE',

  VERSION_ONE_DASHBOARD: 'MENU.VERSION_ONE.DASHBOARD.TITLE',
  VERSION_ONE_INFORMATION: 'MENU.VERSION_ONE.INFORMATION.TITLE',
  VERSION_ONE_SKILL: 'MENU.VERSION_ONE.SKILL.TITLE',
  VERSION_ONE_EXPERIENCE: 'MENU.VERSION_ONE.EXPERIENCE.TITLE',
  VERSION_ONE_EDUCATION: 'MENU.VERSION_ONE.EDUCATION.TITLE',
  VERSION_ONE_PROJECT: 'MENU.VERSION_ONE.PROJECT.TITLE',
  VERSION_ONE_CONTACT: 'MENU.VERSION_ONE.CONTACT.TITLE',

  VERSION_THREE_DASHBOARD: 'MENU.VERSION_THREE.DASHBOARD.TITLE',

  SYSTEM_DEMO: 'MENU.SYSTEM.DEMO.TITLE',
  SYSTEM_DARK: 'MENU.SYSTEM.DARK',
  SYSTEM_LIGHT: 'MENU.SYSTEM.LIGHT',
  SYSTEM_LANGUGE_VI: 'MENU.SYSTEM.LANGUGE_VI',
  SYSTEM_LANGUAGE_EN: 'MENU.SYSTEM.LANGUAGE_EN',
  SYSTEM_LOGOUT: 'MENU.SYSTEM.LOGOUT',

  SYSTEM_DEMO_GITHUBPAGES: 'MENU.SYSTEM.DEMO.GITHUB_PAGES.TITLE',
  SYSTEM_DEMO_GITHUBPAGES_ONE: 'MENU.SYSTEM.DEMO.GITHUB_PAGES.ONE',
  SYSTEM_DEMO_GITHUBPAGES_TWO: 'MENU.SYSTEM.DEMO.GITHUB_PAGES.TWO',
  SYSTEM_DEMO_GITHUBPAGES_THREE: 'MENU.SYSTEM.DEMO.GITHUB_PAGES.THREE',
};

export const MENU_WITHOUT_AUTH: IHeaderMenuItem[] = [
  {
    id: MENU_ITEM_ID.DASHBOARD,
    title: MENU_KEY_TRANSLATION.DASHBOARD,
    linkTo: ROOT.DASHBOARD,
    target: '',
    subOne: [],
  },
  {
    id: MENU_ITEM_ID.VERSION_ONE,
    title: MENU_KEY_TRANSLATION.VERSION_ONE,
    linkTo: '#',
    target: '',
    subOne: [
      {
        id: MENU_ITEM_ID.VERSION_ONE_DASHBOARD,
        title: MENU_KEY_TRANSLATION.VERSION_ONE_DASHBOARD,
        linkTo: VERSION_ONE.DASHBOARD,
        target: '',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.VERSION_ONE_INFORMATION,
        title: MENU_KEY_TRANSLATION.VERSION_ONE_INFORMATION,
        linkTo: VERSION_ONE.INFORMATION,
        target: '',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.VERSION_ONE_SKILL,
        title: MENU_KEY_TRANSLATION.VERSION_ONE_SKILL,
        linkTo: VERSION_ONE.SKILL,
        target: '',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.VERSION_ONE_EXPERIENCE,
        title: MENU_KEY_TRANSLATION.VERSION_ONE_EXPERIENCE,
        linkTo: VERSION_ONE.EXPERIENCE,
        target: '',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.VERSION_ONE_EDUCATION,
        title: MENU_KEY_TRANSLATION.VERSION_ONE_EDUCATION,
        linkTo: VERSION_ONE.EDUCATION,
        target: '',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.VERSION_ONE_PROJECT,
        title: MENU_KEY_TRANSLATION.VERSION_ONE_PROJECT,
        linkTo: VERSION_ONE.PROJECT,
        target: '',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.VERSION_ONE_CONTACT,
        title: MENU_KEY_TRANSLATION.VERSION_ONE_CONTACT,
        linkTo: VERSION_ONE.CONTACT,
        target: '',
        subTwo: [],
      },
    ],
  },
  {
    id: MENU_ITEM_ID.VERSION_TWO,
    title: MENU_KEY_TRANSLATION.VERSION_TWO,
    linkTo: ROOT.VERSION_TWO,
    target: '',
    subOne: [],
  },
  {
    id: MENU_ITEM_ID.VERSION_THREE,
    title: MENU_KEY_TRANSLATION.VERSION_THREE,
    linkTo: '#',
    target: '',
    subOne: [
      {
        id: MENU_ITEM_ID.VERSION_THREE_DASHBOARD,
        title: MENU_KEY_TRANSLATION.VERSION_THREE_DASHBOARD,
        linkTo: VERSION_THREE.DASHBOARD,
        target: '',
        subTwo: [],
      },
    ],
  },
  {
    id: MENU_ITEM_ID.SYSTEM,
    title: MENU_KEY_TRANSLATION.SYSTEM,
    linkTo: '#',
    target: '',
    subOne: [
      {
        id: MENU_ITEM_ID.SYSTEM_DEMO,
        title: MENU_KEY_TRANSLATION.SYSTEM_DEMO,
        linkTo: '#',
        target: '',
        subTwo: [
          {
            id: MENU_ITEM_ID.SYSTEM_DEMO_GITHUBPAGES,
            title: MENU_KEY_TRANSLATION.SYSTEM_DEMO_GITHUBPAGES,
            linkTo: '#',
            target: '',
            subThree: [
              {
                id: MENU_ITEM_ID.SYSTEM_DEMO_GITHUBPAGES_ONE,
                title: MENU_KEY_TRANSLATION.SYSTEM_DEMO_GITHUBPAGES_ONE,
                linkTo: GITHUB_PAGES.PAGE_ONE,
                target: '',
              },
              {
                id: MENU_ITEM_ID.SYSTEM_DEMO_GITHUBPAGES_TWO,
                title: MENU_KEY_TRANSLATION.SYSTEM_DEMO_GITHUBPAGES_TWO,
                linkTo: GITHUB_PAGES.PAGE_TWO,
                target: '',
              },
              {
                id: MENU_ITEM_ID.SYSTEM_DEMO_GITHUBPAGES_THREE,
                title: MENU_KEY_TRANSLATION.SYSTEM_DEMO_GITHUBPAGES_THREE,
                linkTo: GITHUB_PAGES.PAGE_THREE,
                target: '',
              },
            ],
          },
        ],
      },
      {
        id: MENU_ITEM_ID.SYSTEM_CHANGE_TO_LIGHT_MODE,
        title: MENU_KEY_TRANSLATION.SYSTEM_DARK,
        linkTo: '#',
        target: '',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.SYSTEM_CHANGE_LANGUAGE,
        title: MENU_KEY_TRANSLATION.SYSTEM_LANGUGE_VI,
        linkTo: '#',
        target: '',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.SYSTEM_LOG_OUT,
        title: MENU_KEY_TRANSLATION.SYSTEM_LOGOUT,
        linkTo: '#',
        target: '',
        subTwo: [],
      },
    ],
  },
];

// Menu container
export const MENU_ITEM = {
  DASHBOARD: 'dashboard',
  INFORMATION: 'information',
  SKILL: 'skill',
  PROJECT: 'project',
};

export const MENU_CONTAINER: IContainerMenuItem[] = [
  {
    text: MENU_ITEM.DASHBOARD,
    link: ROOT.DASHBOARD,
  },
  {
    text: MENU_ITEM.INFORMATION,
    link: ROOT.INFORMATION,
  },
  {
    text: MENU_ITEM.SKILL,
    link: ROOT.SKILL,
  },
  {
    text: MENU_ITEM.PROJECT,
    link: ROOT.PROJECT,
  },
];
