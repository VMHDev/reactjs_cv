import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { ROOT } from 'src/layout/constants/url';

import GitHubPageRouter from 'src/features/GitHubPage';
import VersionOneRouter from 'src/features/VersionOne';
import VersionTwoRouter from 'src/features/VersionTwo';
import PageNotFound from 'src/components/Error/Page404';

const AppRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={ROOT.ROOT}>
          <Redirect to={ROOT.VERSION_ONE} />
        </Route>
        <Route path={ROOT.GITHUB_PAGES}>
          <GitHubPageRouter />
        </Route>
        <Route path={ROOT.VERSION_ONE}>
          <VersionOneRouter />
        </Route>
        <Route path={ROOT.VERSION_TWO}>
          <VersionTwoRouter />
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
