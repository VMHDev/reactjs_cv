import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import PageOne from 'src/features/GitHubPage/PageOne';
import PageTwo from 'src/features/GitHubPage/PageTwo';
import PageThree from 'src/features/GitHubPage/PageThree';
import PageNotFound from 'src/components/Error/Page404';

const AppRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <PageOne />
        </Route>
        <Route path="/page-one">
          <PageOne />
        </Route>
        <Route path="/page-two">
          <PageTwo />
        </Route>
        <Route path="/page-three">
          <PageThree />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;
