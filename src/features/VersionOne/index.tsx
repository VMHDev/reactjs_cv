import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ROOT } from 'src/layout/constants/url';

import PageNotFound from 'src/components/Error/Page404';
import DashboardPage from 'src/features/VersionOne/pages/Dashboard';

const VersionOneRouter = () => {
  return (
    <Routes>
      <Route path={`${ROOT.VERSION_ONE}/*`} element={<Navigate to={ROOT.DASHBOARD} />} />
      <Route path={`${ROOT.DASHBOARD}`} element={<DashboardPage />} />
      <Route element={<PageNotFound />} />
    </Routes>
  );
};

export default VersionOneRouter;
