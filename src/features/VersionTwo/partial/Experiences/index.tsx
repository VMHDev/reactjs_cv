import React from 'react';

import { INFO_EDUCATIONS } from 'src/data/Educations';
import { INFO_EXPERIENCES } from 'src/data/Experiences';
import Formations from 'src/features/VersionTwo/components/Formations';
import Experiences from 'src/features/VersionTwo/components/Experience';

import './index.css';

function FormationsExperiences() {
  return (
    <>
      <Formations datas={INFO_EDUCATIONS} />
      <Experiences datas={INFO_EXPERIENCES} />
    </>
  );
}

export default FormationsExperiences;
