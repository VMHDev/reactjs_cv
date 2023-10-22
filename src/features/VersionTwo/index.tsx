import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT, VERSION_TWO } from 'src/layout/constants/url';

import PageNotFound from 'src/components/Error/Page404';
import DashboardPage from 'src/features/VersionTwo/pages/Dashboard';

const VersionTwoRouter = () => {
  return (
    <Switch>
      <Route exact path={ROOT.VERSION_TWO}>
        <Redirect to={VERSION_TWO.DASHBOARD} />
      </Route>
      <Route path={VERSION_TWO.DASHBOARD}>
        <DashboardPage />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default VersionTwoRouter;
