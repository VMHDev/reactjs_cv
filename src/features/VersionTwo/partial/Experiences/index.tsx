import React from 'react';

import DataFormations from 'src/features/VersionTwo/data/Formations';
import DataExperiences from 'src/features/VersionTwo/data/Experiences';
import Formations from 'src/features/VersionTwo/components/Formations';
import Experiences from 'src/features/VersionTwo/components/Experience';

import './index.css';

function FormationsExperiences() {
  return (
    <>
      <Formations datas={DataFormations} />
      <Experiences datas={DataExperiences} />
    </>
  );
}

export default FormationsExperiences;
