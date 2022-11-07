# Init project
  ## Install
    > npx create-react-app . --template typescript

  ## Config Code formatter
    - Install in project
      > yarn add --dev --exact prettier
    - Add file config  
    Create a .prettierrc.json file at your project root:
      > touch .prettierrc.json 
    In file enter:  
    ```
    { 
      "singleQuote": true,    //Chuỗi trong dấu nháy đơn
      "tabWidth": 2,          // Một phím tab bằng 2 phím spaces  
      "printWidth": 100,       // Một dòng code dài tối đa 100 ký tự  
      "bracketSpacing": true  // Bỏ các dòng thừa trong { ... }
    }
    ```

    - Add file ignore
    Create a .prettierignore file at your project root:
      > touch .prettierignore
    In file enter:
      > *.md

    - Setup path root import file
    In file tsconfig.json. Add in compilerOptions:
      > "baseUrl": "./"

  ## Remove file/folder unnecessary
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
    > yarn remove @types/jest

  ## Setup enviroment variables  - Change port
    -Setup enviroment variables
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

    - Change port
      - In all file *.env enter:  
        > `PORT=<Number port>`

  ## Setup Coding convention
    - Install:
      > yarn add eslint --dev

    - Add file config
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

    - Add rules:
    In rules of .eslintrc.json:
      ```
      "quotes": ["error", "single", { "avoidEscape": true }],
      "no-console": [
          "warn",
          { "allow": ["error"] }
         ],
      "@typescript-eslint/no-explicit-any": "off"
      ```
    - Add file ignore
    Create a .eslintignore file at your project root.
      > touch .eslintignore
    Enter
      > node_modules

# Deploy github pages
  - Ref: 
    - https://github.com/gitname/react-gh-pages
    - https://viblo.asia/p/deploy-ung-dung-reactjs-len-github-pages-1VgZvw3MlAw
  - Step:
    - Install: gh-pages
      > yarn add --dev gh-pages
    - In package.json. Add
      > "homepage": "https://vmhdev.github.io/reactjs_cv",
    - In package.json/scripts. Add
      > "predeploy": "npm run build",
      > "deploy": "gh-pages -d build"
    - Deploy:
      > yarn deploy
  - Note: 
    - Work on branch main

