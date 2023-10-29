import React from 'react';
import { GrDocumentPdf } from 'react-icons/gr';

import DarkMode from 'src/features/VersionTwo/components/DarkMode';
import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';

import ContactPartial from 'src/features/VersionTwo/partial/Contact';
import SkillsPartial from 'src/features/VersionTwo/partial/Skills';
import IntroducePartial from 'src/features/VersionTwo/partial/Introduce';
import ExperiencesPartial from 'src/features/VersionTwo/partial/Experiences';

import './index.css';

const VersionTwoPages = () => {
  const handleGenerateCv = () => {
    // let cvTemplate = document.getElementById("cv-print")
    // cvTemplate.setAttribute("style", "width:210mm !important")
    // cvTemplate.classList.add("cv-print")
    // document.body.classList.remove("dark")
    // setTimeout(() => {
    //   print("cv", "cv-print")
    //   cvTemplate.setAttribute("style", "width:100% !important")
    //   cvTemplate.classList.remove("cv-print")
    // }, 300)
    return null;
  };

  return (
    <LayoutMain>
      <ContainerMain>
        <div id="cv-print" className="cv-print">
          <div className="App">
            <div className="grid__container">
              <div className="sidebar">
                <div className="actions">
                  <DarkMode />
                  <button onClick={handleGenerateCv}>
                    <GrDocumentPdf />
                  </button>
                </div>
                <ContactPartial />
                <SkillsPartial />
              </div>
              <div className="main">
                <IntroducePartial />
                <ExperiencesPartial />
              </div>
            </div>
          </div>
        </div>
      </ContainerMain>
    </LayoutMain>
  );
};

export default VersionTwoPages;
