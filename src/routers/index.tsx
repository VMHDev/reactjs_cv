import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { ROOT } from 'src/layout/constants/url';

import GitHubPageRouter from 'src/features/GitHubPage';
import VersionOneRouter from 'src/features/VersionOne';
import PageNotFound from 'src/components/Error/Page404';

const AppRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={ROOT.ROOT}>
          <VersionOneRouter />
        </Route>
        <Route path={ROOT.GITHUB_PAGES}>
          <GitHubPageRouter />
        </Route>
        <Route path={ROOT.VERSION_ONE}>
          <VersionOneRouter />
        </Route>
        <Route path={ROOT.NOT_FOUND}>
          <PageNotFound />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;
