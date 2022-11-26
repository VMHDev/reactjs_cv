import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT, GITHUB_PAGES } from 'src/layout/constants/url';

import PageOne from 'src/features/GitHubPage/PageOne';
import PageTwo from 'src/features/GitHubPage/PageTwo';
import PageThree from 'src/features/GitHubPage/PageThree';

const GitHubPage = () => {
  const NotFoundRedirect = () => <Redirect to={ROOT.NOT_FOUND} />;
  return (
    <Switch>
      <Route exact path={ROOT.GITHUB_PAGES}>
        <Redirect to={GITHUB_PAGES.PAGE_ONE} />
      </Route>
      <Route path={GITHUB_PAGES.PAGE_ONE}>
        <PageOne />
      </Route>
      <Route path={GITHUB_PAGES.PAGE_TWO}>
        <PageTwo />
      </Route>
      <Route path={GITHUB_PAGES.PAGE_THREE}>
        <PageThree />
      </Route>
      <Route component={NotFoundRedirect} />
    </Switch>
  );
};

export default GitHubPage;
