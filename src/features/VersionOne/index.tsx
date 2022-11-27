import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT, VERSION_ONE } from 'src/layout/constants/url';

import PageNotFound from 'src/components/Error/Page404';
import DashboardPage from 'src/features/VersionOne/pages/Dashboard';
import ContactPage from 'src/features/VersionOne/pages/Contact';
import EducationPage from 'src/features/VersionOne/pages/Education';
import ExperiencePage from 'src/features/VersionOne/pages/Experience';
import ProjectPage from 'src/features/VersionOne/pages/Project';
import InformationPage from 'src/features/VersionOne/pages/Information';
import SkillPage from 'src/features/VersionOne/pages/Skill';

const VersionOneRouter = () => {
  return (
    <Switch>
      <Route exact path={ROOT.VERSION_ONE}>
        <Redirect to={VERSION_ONE.DASHBOARD} />
      </Route>
      <Route path={VERSION_ONE.DASHBOARD}>
        <DashboardPage />
      </Route>
      <Route path={VERSION_ONE.INFORMATION}>
        <InformationPage />
      </Route>
      <Route path={VERSION_ONE.SKILL}>
        <SkillPage />
      </Route>
      <Route path={VERSION_ONE.EXPERIENCE}>
        <ExperiencePage />
      </Route>
      <Route path={VERSION_ONE.EDUCATION}>
        <EducationPage />
      </Route>
      <Route path={VERSION_ONE.PROJECT}>
        <ProjectPage />
      </Route>
      <Route path={VERSION_ONE.CONTACT}>
        <ContactPage />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default VersionOneRouter;
