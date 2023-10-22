import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { SYSTEM } from 'src/layout/constants/url';

import PageNotFound from 'src/components/Error/Page404';
import GitHubRouter from 'src/features/System/pages/Demo/pages/GitHubPage';

const DemoRouter = () => {
  return (
    <Switch>
      {/*/system/demo */}
      <Route exact path={SYSTEM.DEMO.ROOT}>
        <Redirect to={SYSTEM.DEMO.GITHUB_PAGES} /> {/*/system/demo/github-pages */}
      </Route>
      {/*/system/demo/github-pages */}
      <Route path={SYSTEM.DEMO.GITHUB_PAGES}>
        <GitHubRouter />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default DemoRouter;
