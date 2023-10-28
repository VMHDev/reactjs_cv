import React from 'react';

import Skill from 'src/features/VersionTwo/components/Skill';
import Interests from 'src/features/VersionTwo/components/Interests';

import './index.css';

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating={5} />
        <Skill title="CSS" rating={4} />
        <Skill title="JAVASCRIPT" rating={4} />
        <Skill title="REACT" rating={4} />
        <Skill title="NODE" rating={3} />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Anglais" rating={4} />
        <Skill title="Allemand" rating={3} />
        <Skill title="Espagnol" rating={2} />
      </div>
      <Interests />
    </>
  );
}

export default Skills;
