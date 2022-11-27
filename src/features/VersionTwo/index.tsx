import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT, VERSION_ONE } from 'src/layout/constants/url';

import PageNotFound from 'src/components/Error/Page404';
import DashboardPage from 'src/features/VersionOne/pages/Dashboard';

const VersionTwoRouter = () => {
  return (
    <Switch>
      <Route exact path={ROOT.VERSION_ONE}>
        <Redirect to={VERSION_ONE.DASHBOARD} />
      </Route>
      <Route path={VERSION_ONE.DASHBOARD}>
        <DashboardPage />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default VersionTwoRouter;
