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
    id: MENU_ITEM_ID.NONE_AUTH_REACTJS,
    title: MENU_KEY_TRANSLATION.NONE_AUTH_REACTJS,
    linkTo: '#',
    target: '',
    subOne: [
      {
        id: MENU_ITEM_ID.NONE_AUTH_REACTJS_HOMEPAGE,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_REACTJS_HOMEPAGE,
        linkTo: 'https://reactjs.org/',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_REDUX,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_REDUX,
        linkTo: 'https://redux.js.org/',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_PERSIST,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_PERSIST,
        linkTo: 'https://www.npmjs.com/package/redux-persist',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_ERROR,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_ERROR,
        linkTo: 'https://www.npmjs.com/package/react-error-boundary',
        target: '_blank',
        subTwo: [],
      },
    ],
  },
  {
    id: MENU_ITEM_ID.NONE_AUTH_GUI,
    title: MENU_KEY_TRANSLATION.NONE_AUTH_GUI,
    linkTo: '#',
    target: '',
    subOne: [
      {
        id: MENU_ITEM_ID.NONE_AUTH_ANTD,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_ANTD,
        linkTo: 'https://ant.design/docs/react/introduce',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_ICONS,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_ICONS,
        linkTo: 'https://react-icons.github.io/react-icons/',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_OTP,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_OTP,
        linkTo: 'https://www.npmjs.com/package/react-otp-input',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_NUMBER,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_NUMBER,
        linkTo: 'https://www.npmjs.com/package/react-number-format',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_TRANSITION,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_TRANSITION,
        linkTo: 'https://reactcommunity.org/react-transition-group/',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_INFINITE_SCROLL,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_INFINITE_SCROLL,
        linkTo: 'https://www.npmjs.com/package/react-infinite-scroll-component',
        target: '_blank',
        subTwo: [],
      },
    ],
  },
  {
    id: MENU_ITEM_ID.NONE_AUTH_VALIDATE,
    title: MENU_KEY_TRANSLATION.NONE_AUTH_VALIDATE,
    linkTo: '#',
    target: '',
    subOne: [
      {
        id: MENU_ITEM_ID.NONE_AUTH_YUP,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_YUP,
        linkTo: 'https://www.npmjs.com/package/yup',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_ERROR,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_HOOK_FORM,
        linkTo: 'https://react-hook-form.com/',
        target: '_blank',
        subTwo: [],
      },
    ],
  },
  {
    id: MENU_ITEM_ID.NONE_AUTH_LIBRARY,
    title: MENU_KEY_TRANSLATION.NONE_AUTH_LIBRARY,
    linkTo: '#',
    target: '',
    subOne: [
      {
        id: MENU_ITEM_ID.NONE_AUTH_TYPESCRIPT,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_TYPESCRIPT,
        linkTo: 'https://www.typescriptlang.org/',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_RECHARTS,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_RECHARTS,
        linkTo: 'https://recharts.org/en-US/',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_I18NEXT,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_I18NEXT,
        linkTo: 'https://react.i18next.com/',
        target: '_blank',
        subTwo: [],
      },
      {
        id: MENU_ITEM_ID.NONE_AUTH_LAUNCHDARKLY,
        title: MENU_KEY_TRANSLATION.NONE_AUTH_LAUNCHDARKLY,
        linkTo: 'https://launchdarkly.com/',
        target: '_blank',
        subTwo: [],
      },
    ],
  },
  {
    id: MENU_ITEM_ID.NONE_AUTH_CONTACT,
    title: MENU_KEY_TRANSLATION.NONE_AUTH_CONTACT,
    linkTo: 'https://vmhdev.github.io/cv_vmhdev/',
    target: '_blank',
    subOne: [],
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
