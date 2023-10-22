import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT, SYSTEM } from 'src/layout/constants/url';

import PageNotFound from 'src/components/Error/Page404';
import DemoRouter from 'src/features/System/pages/Demo';

const SystemRouter = () => {
  return (
    <Switch>
      {/*/system */}
      <Route exact path={ROOT.SYSTEM}>
        <Redirect to={SYSTEM.DEMO.ROOT} /> {/*/system/demo */}
      </Route>
      {/*/system/demo */}
      <Route path={SYSTEM.DEMO.ROOT}>
        <DemoRouter />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default SystemRouter;
