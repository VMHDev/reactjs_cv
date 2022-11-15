import { ROOT } from 'src/layout/constants/url';
import { IContainerMenuItem, IHeaderMenuItem } from 'src/layout/types';

// Menu header
export const enum MENU_ITEM_ID {
  DASHBOARD = 1,

  DEMO = 2,
  DEMO_ANTD = 21,
  DEMO_ANTD_BUTTON = 211,
  DEMO_ANTD_COLLAPSE = 212,
  DEMO_ANTD_EMPTY = 213,

  DEMO_LAUNCHDARKLY = 22,
  DEMO_CONNECTED_REACT_ROUTER = 23,

  DEMO_INPUT = 24,
  DEMO_FORM_FIELDS_ANTD = 241,

  DEMO_GET_STYLES_COMPONENT = 25,
  DEMO_AMPLITUDE = 26,
  DEMO_TEXT_SHOW_MORE = 27,

  GUI = 3,
  GUI_DASHBOARD = 31,
  GUI_FORMS = 32,
  GUI_MODALS = 33,
  GUI_LISTS = 34,

  GUI_PROGRESS = 35,
  GUI_PROGRESS_STEP = 351,
  GUI_PROGRESS_WATTING = 352,

  GUI_CHART = 36,
  GUI_CHART_RECHART = 361,
  GUI_CHART_RECHART_INLINE = 3611,

  PAGE = 4,
  PAGE_AUTH = 41,
  PAGE_AUTH_LOGIN = 411,
  PAGE_AUTH_REGISTER = 412,
  PAGE_AUTH_PASSWORD = 413,

  SYSTEM = 99,
  SYSTEM_CHANGE_TO_LIGHT_MODE = 991,
  SYSTEM_CHANGE_LANGUAGE = 992,
  SYSTEM_LOG_OUT = 993,

  ///////////////////////////////////////////////
  NONE_AUTH_REACTJS = 1,
  NONE_AUTH_REACTJS_HOMEPAGE = 10,
  NONE_AUTH_REDUX = 11,
  NONE_AUTH_PERSIST = 12,
  NONE_AUTH_ROUTER = 13,
  NONE_AUTH_ERROR = 14,

  NONE_AUTH_GUI = 2,
  NONE_AUTH_ANTD = 21,
  NONE_AUTH_ICONS = 22,
  NONE_AUTH_OTP = 23,
  NONE_AUTH_NUMBER = 24,
  NONE_AUTH_TRANSITION = 25,
  NONE_AUTH_INFINITE_SCROLL = 26,

  NONE_AUTH_VALIDATE = 3,
  NONE_AUTH_YUP = 31,
  NONE_AUTH_HOOK_FORM = 33,

  NONE_AUTH_LIBRARY = 4,
  NONE_AUTH_TYPESCRIPT = 41,
  NONE_AUTH_RECHARTS = 42,
  NONE_AUTH_I18NEXT = 43,
  NONE_AUTH_LAUNCHDARKLY = 44,

  NONE_AUTH_CONTACT = 999,
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
  DEMO: 'MENU.DEMO.TITLE',
  GUI: 'MENU.GUI.TITLE',
  PAGE: 'MENU.PAGE.TITLE',
  DASHBOARD: 'MENU.DASHBOARD.TITLE',

  DEMO_ANTD: 'MENU.DEMO.ANTD.TITLE',
  DEMO_ANTD_BUTTON: 'MENU.DEMO.ANTD.BUTTON',
  DEMO_ANTD_COLLAPSE: 'MENU.DEMO.ANTD.COLLAPSE',
  DEMO_ANTD_EMPTY: 'MENU.DEMO.ANTD.EMPTY',

  DEMO_INPUT: 'MENU.DEMO.FORM_FIELDS.TITLE',
  DEMO_FORM_FIELDS_ANTD: 'MENU.DEMO.FORM_FIELDS.ANTD',

  DEMO_LAUNCHDARKLY: 'MENU.DEMO.LAUNCHDARKLY.TITLE',
  DEMO_CONNECTED_REACT_ROUTER: 'MENU.DEMO.CONNECTED_REACT_ROUTER.TITLE',
  DEMO_GET_STYLES_COMPONENT: 'MENU.DEMO.GET_STYLES_COMPONENT.TITLE',
  DEMO_AMPLITUDE: 'MENU.DEMO.AMPLITUDE.TITLE',
  DEMO_TEXT_SHOW_MORE: 'MENU.DEMO.TEXT_SHOW_MORE.TITLE',

  GUI_DASHBOARD: 'MENU.GUI.DASHBOARD',
  GUI_FORMS: 'MENU.GUI.FORMS',
  GUI_MODALS: 'MENU.GUI.MODALS',
  GUI_LISTS: 'MENU.GUI.LISTS',

  GUI_PROGRESS: 'MENU.GUI.PROGRESS.TITLE',
  GUI_PROGRESS_STEP: 'MENU.GUI.PROGRESS.STEP',
  GUI_PROGRESS_WATTING: 'MENU.GUI.PROGRESS.WATTING',

  GUI_CHART: 'MENU.GUI.CHART.TITLE',
  GUI_CHART_RECHART: 'MENU.GUI.CHART.RECHART.TITLE',
  GUI_CHART_RECHART_INLINE: 'MENU.GUI.CHART.RECHART.INLINE',

  PAGE_AUTH: 'MENU.PAGE.AUTH.TITLE',
  PAGE_AUTH_LOGIN: 'MENU.PAGE.AUTH.LOGIN',
  PAGE_AUTH_REGISTER: 'MENU.PAGE.AUTH.REGISTER',
  PAGE_AUTH_PASSWORD: 'MENU.PAGE.AUTH.PASSWORD',

  SYSTEM_DARK: 'MENU.SYSTEM.DARK',
  SYSTEM_LIGHT: 'MENU.SYSTEM.LIGHT',
  SYSTEM_LANGUGE_VI: 'MENU.SYSTEM.LANGUGE_VI',
  SYSTEM_LANGUAGE_EN: 'MENU.SYSTEM.LANGUAGE_EN',
  SYSTEM_LOGOUT: 'MENU.SYSTEM.LOGOUT',

  ///////////////////////////////////////////////
  NONE_AUTH_REACTJS: 'MENU.NONE_AUTH.REACTJS',
  NONE_AUTH_REACTJS_HOMEPAGE: 'MENU.NONE_AUTH.REACTJS_HOMEPAGE',
  NONE_AUTH_REDUX: 'MENU.NONE_AUTH.REDUX',
  NONE_AUTH_PERSIST: 'MENU.NONE_AUTH.PERSIST',
  NONE_AUTH_ROUTER: 'MENU.NONE_AUTH.ROUTER',
  NONE_AUTH_ERROR: 'MENU.NONE_AUTH.ERROR',

  NONE_AUTH_GUI: 'MENU.NONE_AUTH.GUI',
  NONE_AUTH_ANTD: 'MENU.NONE_AUTH.ANTD',
  NONE_AUTH_ICONS: 'MENU.NONE_AUTH.ICONS',
  NONE_AUTH_OTP: 'MENU.NONE_AUTH.OTP',
  NONE_AUTH_NUMBER: 'MENU.NONE_AUTH.NUMBER',
  NONE_AUTH_TRANSITION: 'MENU.NONE_AUTH.TRANSITION',
  NONE_AUTH_INFINITE_SCROLL: 'MENU.NONE_AUTH.INFINITE_SCROLL',

  NONE_AUTH_VALIDATE: 'MENU.NONE_AUTH.VALIDATE',
  NONE_AUTH_YUP: 'MENU.NONE_AUTH.YUP',
  NONE_AUTH_HOOK_FORM: 'MENU.NONE_AUTH.HOOK_FORM',

  NONE_AUTH_LIBRARY: 'MENU.NONE_AUTH.LIBRARY',
  NONE_AUTH_TYPESCRIPT: 'MENU.NONE_AUTH.TYPESCRIPT',
  NONE_AUTH_RECHARTS: 'MENU.NONE_AUTH.RECHARTS',
  NONE_AUTH_I18NEXT: 'MENU.NONE_AUTH.I18NEXT',
  NONE_AUTH_LAUNCHDARKLY: 'MENU.NONE_AUTH.LAUNCHDARKLY',

  NONE_AUTH_CONTACT: 'MENU.NONE_AUTH.CONTACT',
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
    id: MENU_ITEM_ID.DEMO,
    title: MENU_KEY_TRANSLATION.DEMO,
    linkTo: '#',
    target: '',
    subOne: [
      {
        id: MENU_ITEM_ID.DEMO_ANTD,
        title: MENU_KEY_TRANSLATION.DEMO_ANTD,
        linkTo: '#',
        target: '',
        subTwo: [
          {
            id: 211,
            title: MENU_KEY_TRANSLATION.DEMO_ANTD_BUTTON,
            linkTo: ROOT.DASHBOARD,
            target: '',
            subThree: [],
          },
          {
            id: 212,
            title: MENU_KEY_TRANSLATION.DEMO_ANTD_COLLAPSE,
            linkTo: ROOT.DASHBOARD,
            target: '',
            subThree: [],
          },
          {
            id: 213,
            title: MENU_KEY_TRANSLATION.DEMO_ANTD_EMPTY,
            linkTo: ROOT.DASHBOARD,
            target: '',
            subThree: [],
          },
        ],
      },
      {
        id: 22,
        title: MENU_KEY_TRANSLATION.DEMO_LAUNCHDARKLY,
        linkTo: ROOT.DASHBOARD,
        target: '',
        subTwo: [],
      },
      {
        id: 23,
        title: MENU_KEY_TRANSLATION.DEMO_CONNECTED_REACT_ROUTER,
        linkTo: ROOT.DASHBOARD,
        target: '',
        subTwo: [],
      },
      {
        id: 24,
        title: MENU_KEY_TRANSLATION.DEMO_INPUT,
        linkTo: '#',
        target: '',
        subTwo: [
          {
            id: 241,
            title: MENU_KEY_TRANSLATION.DEMO_FORM_FIELDS_ANTD,
            linkTo: ROOT.DASHBOARD,
            target: '',
            subThree: [],
          },
        ],
      },
      {
        id: 25,
        title: MENU_KEY_TRANSLATION.DEMO_GET_STYLES_COMPONENT,
        linkTo: ROOT.DASHBOARD,
        target: '',
        subTwo: [],
      },
      {
        id: 26,
        title: MENU_KEY_TRANSLATION.DEMO_AMPLITUDE,
        linkTo: ROOT.DASHBOARD,
        target: '',
        subTwo: [],
      },
      {
        id: 27,
        title: MENU_KEY_TRANSLATION.DEMO_TEXT_SHOW_MORE,
        linkTo: ROOT.DASHBOARD,
        target: '',
        subTwo: [],
      },
    ],
  },
  {
    id: 3,
    title: MENU_KEY_TRANSLATION.GUI,
    linkTo: '#',
    target: '',
    subOne: [
      {
        id: 31,
        title: MENU_KEY_TRANSLATION.GUI_DASHBOARD,
        linkTo: ROOT.DASHBOARD,
        target: '',
        subTwo: [],
      },
      {
        id: 32,
        title: MENU_KEY_TRANSLATION.GUI_FORMS,
        linkTo: ROOT.DASHBOARD,
        target: '',
        subTwo: [],
      },
      {
        id: 33,
        title: MENU_KEY_TRANSLATION.GUI_MODALS,
        linkTo: ROOT.DASHBOARD,
        target: '',
        subTwo: [],
      },
      {
        id: 34,
        title: MENU_KEY_TRANSLATION.GUI_LISTS,
        linkTo: ROOT.DASHBOARD,
        target: '',
        subTwo: [],
      },
      {
        id: 35,
        title: MENU_KEY_TRANSLATION.GUI_PROGRESS,
        linkTo: '#',
        target: '',
        subTwo: [
          {
            id: 351,
            title: MENU_KEY_TRANSLATION.GUI_PROGRESS_STEP,
            linkTo: ROOT.DASHBOARD,
            target: '',
            subThree: [],
          },
          {
            id: 352,
            title: MENU_KEY_TRANSLATION.GUI_PROGRESS_WATTING,
            linkTo: ROOT.DASHBOARD,
            target: '',
            subThree: [],
          },
        ],
      },
      {
        id: 36,
        title: MENU_KEY_TRANSLATION.GUI_CHART,
        linkTo: '#',
        target: '',
        subTwo: [
          {
            id: 361,
            title: MENU_KEY_TRANSLATION.GUI_CHART_RECHART,
            linkTo: '#',
            target: '',
            subThree: [
              {
                id: 3611,
                title: MENU_KEY_TRANSLATION.GUI_CHART_RECHART_INLINE,
                linkTo: ROOT.DASHBOARD,
                target: '',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: MENU_KEY_TRANSLATION.PAGE,
    linkTo: ROOT.DASHBOARD,
    target: '',
    subOne: [
      {
        id: 41,
        title: MENU_KEY_TRANSLATION.PAGE_AUTH,
        linkTo: '#',
        target: '',
        subTwo: [
          {
            id: 411,
            title: MENU_KEY_TRANSLATION.PAGE_AUTH_LOGIN,
            linkTo: ROOT.DASHBOARD,
            target: '',
            subThree: [],
          },
          {
            id: 412,
            title: MENU_KEY_TRANSLATION.PAGE_AUTH_REGISTER,
            linkTo: ROOT.DASHBOARD,
            target: '',
            subThree: [],
          },
          {
            id: 413,
            title: MENU_KEY_TRANSLATION.PAGE_AUTH_PASSWORD,
            linkTo: ROOT.DASHBOARD,
            target: '',
            subThree: [],
          },
        ],
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
