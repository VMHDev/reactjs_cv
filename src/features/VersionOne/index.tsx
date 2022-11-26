import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT } from 'src/layout/constants/url';

import PageNotFound from 'src/components/Error/Page404';
import DashboardPage from 'src/features/VersionOne/pages/Dashboard';

const VersionOneRouter = () => {
  return (
    <Switch>
      <Route path={`${ROOT.VERSION_ONE}/*`}>
        <Redirect to={ROOT.DASHBOARD} />
      </Route>
      <Route path={`${ROOT.DASHBOARD}`}>
        <DashboardPage />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default VersionOneRouter;
