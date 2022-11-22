import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROOT } from 'src/layout/constants/url';

import VersionOneRouter from 'src/features/VersionOne';
import PageNotFound from 'src/components/Error/Page404';

const AppRouter = () => {
  return (
    <BrowserRouter basename="reactjs_cv">
      <Routes>
        <Route path={ROOT.ROOT} element={<Navigate to={ROOT.NOT_FOUND} />} />
        <Route path={`${ROOT.VERSION_ONE}/*`} element={<VersionOneRouter />} />
        <Route path={ROOT.NOT_FOUND} element={<PageNotFound />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
