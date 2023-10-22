import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT, SYSTEM, GITHUB_PAGES } from 'src/layout/constants/url';

import PageOne from 'src/features/System/pages/Demo/pages/GitHubPage/PageOne';
import PageTwo from 'src/features/System/pages/Demo/pages/GitHubPage/PageTwo';
import PageThree from 'src/features/System/pages/Demo/pages/GitHubPage/PageThree';

const GitHubRouter = () => {
  const NotFoundRedirect = () => <Redirect to={ROOT.NOT_FOUND} />;
  return (
    <Switch>
      {/*/system/demo/github-pages */}
      <Route exact path={SYSTEM.DEMO.GITHUB_PAGES}>
        <Redirect to={GITHUB_PAGES.PAGE_ONE} /> {/*/system/demo/github-pages/page-one */}
      </Route>
      {/*/system/demo/github-pages/page-one */}
      <Route path={GITHUB_PAGES.PAGE_ONE}>
        <PageOne />
      </Route>
      {/*/system/demo/github-pages/page-two */}
      <Route path={GITHUB_PAGES.PAGE_TWO}>
        <PageTwo />
      </Route>
      {/*/system/demo/github-pages/page-three */}
      <Route path={GITHUB_PAGES.PAGE_THREE}>
        <PageThree />
      </Route>
      <Route component={NotFoundRedirect} />
    </Switch>
  );
};

export default GitHubRouter;
