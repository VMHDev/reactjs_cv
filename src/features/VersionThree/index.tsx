import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT, VERSION_THREE } from 'src/layout/constants/url';

import PageNotFound from 'src/components/Error/Page404';
import DashboardPage from 'src/features/VersionThree/pages/Dashboard';

const VersionThreeRouter = () => {
  return (
    <Switch>
      <Route exact path={ROOT.VERSION_THREE}>
        <Redirect to={VERSION_THREE.DASHBOARD} />
      </Route>
      <Route path={VERSION_THREE.DASHBOARD}>
        <DashboardPage />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default VersionThreeRouter;
