# Info project
  - GUI Library: 
    - antd
  - CSS: 
    - styled-components
  - Manage State: 
    - react-redux
    - redux-toolkit
    - Storage State: 
      - redux-persist
    - Encrypt redux presist
      - redux-persist-transform-encrypt

# Init
## - Install
  > npx create-react-app . --template typescript
## - Setup Code formatter
  - Install in project
  > yarn add --dev --exact prettier

  - Install extension  
  Prettier - Code formatter.  
  Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

  - Add file config  
    - Create a **.prettierrc.json** file at your project root:
      > touch .prettierrc.json     
    - In file enter:  
      ```
      { 
        "singleQuote": true,     //Chuỗi trong dấu nháy đơn
        "tabWidth": 2,           // Một phím tab bằng 2 phím spaces  
        "printWidth": 100,       // Một dòng code dài tối đa 100 ký tự  
        "bracketSpacing": true   // Bỏ các dòng thừa trong { ... }
      }
      ```

  - Add file ignore
    - Create a **.prettierignore** file at your project root:
      > touch .prettierignore
    - In file enter:
      > *.md

## - Setup path root import file
  - In file tsconfig.json.
  - Add in compilerOptions:
    > "baseUrl": "./"

## - Remove file/folder unnecessary
  - In src/index.tsx. Change content to:
  ```
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from 'src/App';

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ```

  - In src/App.tsx. Change content to:
  ```
  import React from 'react';

  const App = () => {
    return <>ReactJS Project</>;
  };

  export default App;
  ```

  - Remove file:
  > index.css  
  > App.css  
  > App.test.tsx  
  > logo.svg  
  > reportWebVitals.ts  
  > setupTests.ts  
  > package.json.lock  

  - Remove library
  > yarn remove web-vitals  
  > yarn remove @testing-library/jest-dom   
  > yarn remove @testing-library/react  
  > yarn remove @testing-library/user-event  

## - Setup enviroment variables  - Change port
  ### + Setup enviroment variables
  - Link ref: https://javascript.plainenglish.io/various-ways-of-handling-environment-variables-in-react-and-node-js-5b9ce13aa7b1
  - Install
    > yarn add env-cmd
  - Add file .env
    > .env.dev
    > .env.qa
    > .env.prod
  - Edit file package.json
  ```
  "scripts": {
    "start": "env-cmd -f .env.dev react-scripts start",
    "start:dev": "env-cmd -f .env.dev react-scripts start",
    "start:qa": "env-cmd -f .env.qa react-scripts start",
    "start:prod": "env-cmd -f .env.prod react-scripts start",
    "build": "env-cmd -f .env.dev react-scripts build",
    "build:dev": "env-cmd -f .env.dev react-scripts build",
    "build:qa": "env-cmd -f .env.qa react-scripts build",
    "build:prod": "env-cmd -f .env.prod react-scripts build"
  },  
  ```
  ### + Change port
  - In all file ***.env** enter:  
    > `PORT=<Number port>`

## - Setup Coding convention
  - Link ref: https://eslint.org/docs/user-guide/getting-started 
  ### + Install:
  > yarn add eslint --dev
  ### + Add file config
  > yarn create @eslint/config   

    ✔ How would you like to use ESLint? => To check syntax and find problems
    ✔ What type of modules does your project use? => JavaScript modules (import/export)
    ✔ Which framework does your project use? => React
    ✔ Does your project use TypeScript? · => Yes
    ✔ Where does your code run? => Browser
    ✔ What format do you want your config file to be in? => JSON

    The config that you've selected requires the following dependencies:
    eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
    ✔ Would you like to install them now? · Yes
    ✔ Which package manager do you want to use? · yarn
  ### + Add rules:
  - In rules of **.eslintrc.json**:  
    ```
    "quotes": ["error", "single", { "avoidEscape": true }] 
    => Báo lỗi khi dùng nháy kép cho chuỗi

    "no-console": [
        "warn",
        { "allow": ["error"] }
       ]
    => Cảnh báo khi sử dụng console. Ngoại trừ console.error

    "@typescript-eslint/no-explicit-any": "off"
    => Tắt cảnh báo khi sử dụng any trong typescript
    ```
  ### + Add file ignore
  - Create a **.eslintignore** file at your project root.
    > touch .eslintignore
  - Enter
    > node_modules

  ## Error boundary - Handle error page broken and react error
  - Install
      > yarn add react-error-boundary
  - Config in src/App.tsx

  ## Setup css preprocessor - less
  - Ref:  
    - https://github.com/DocSpring/craco-less
    - https://github.com/dilanx/craco/blob/main/packages/craco/README.md#installation
    - https://craco.js.org/docs/getting-started/
  - Install
    > npm i -D @craco/craco
    > npm i -S craco-less
  - Update package.json
  ```
  "scripts": {
    "start": "env-cmd -f .env.dev craco start",
    "build": "env-cmd -f .env.dev craco build"
  },
  ```
  - Create file **craco.config.ts** in root folder. Enter:
  ```
  /* eslint-disable @typescript-eslint/no-var-requires */
  const CracoLessPlugin = require('craco-less');

  module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  };  
  ```
  - In **react-app-env.d.ts**. Add:
  ```
  declare module '*.module.less' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  ```
  - Fixbug:
    - In **tsconfig.json**. Update:
    ```
    "isolatedModules": false,
    ```

  ## Setup library CSS (styled-components)
  - Install
      > yarn add styled-components
      > yarn add --dev @types/styled-components
  - In package.json. Enter:
    ```
    "resolutions": {
      "styled-components": "^5"
    }
    ```
    ### Config variables global
    - In **src/styles/global.styled.ts**
    - In **src/App.tsx**. Add
      ```
      <GlobalStyled color={colors} font={fonts} />
      ```

  ## Setup library GUI antd 
  - Install
      > yarn add antd
    (Optional - Library GUI)
      > yarn add @ant-design/icons
  - In file **src/index.tsx**. Enter:
      > import 'antd/dist/antd.less';;
  
  ## Setup library GUI other
  - Install
    > yarn add dompurify
    > yarn add --dev @types/dompurify
    > yarn add react-show-more-text
    > yarn add --dev @types/react-show-more-text
    > yarn add react-otp-input
    > yarn add react-number-format

  ## Setup multiple language:
  - Install
    > npm install react-i18next i18next --save  
    > yarn add i18next-resources-to-backend  
    > yarn add @types/react-i18next  
  - Add config in **src/locale**
  - In file **src/index.tsx**. Enter:
    > import 'src/locale/i18n';

    ### Change language
    - In file **src/index.tsx**. Enter:
      ```
        const { i18n } = useTranslation();
        const stateLanguage = 'en';

        useEffect(() => {
          i18n.changeLanguage(stateLanguage);
        }, [stateLanguage]);
      ```

  ## Setup router v5
  - Install
    > yarn add react-router-dom@5.3.4   
    > yarn add --dev @types/react-router-dom@5.3.3   
        
# Deploy github pages
  - Ref: 
    - https://github.com/gitname/react-gh-pages
    - https://viblo.asia/p/deploy-ung-dung-reactjs-len-github-pages-1VgZvw3MlAw
  - Config:
    - Install: gh-pages
      > yarn add --dev gh-pages
    - In package.json. Add
      > "homepage": "https://vmhdev.github.io/reactjs_cv/",
    - In package.json/scripts. Add
      > "predeploy": "npm run build",  
      > "deploy": "gh-pages -d build"
    - In **src/routers** update:
    Ref: https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/
      > ***BrowserRouter*** to ***HashRouter***
  - Deploy:
      - Checkout branch main   
      - Enter: yarn deploy   
  - Fix error:
    - **a branch named 'gh-pages' already   exists**   
    => Deleting the folder ***node_modules/.cache/gh-pages***   

