import React from 'react';
import { MdLibraryMusic, MdOutlineDirectionsBike } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { FaSwimmer } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';

const Interests = () => {
  return (
    <div className="skills">
      <h2 className="h2">Sở thích</h2>
      <ul>
        <li>Informatique</li>
        <li>Musique</li>
        <li>Tennis</li>
        <li>Randonnée</li>
      </ul>
      <div className="interests">
        <MdLibraryMusic style={{ fontSize: 40 }} />
        <CgGym style={{ fontSize: 40 }} />
        <FaSwimmer style={{ fontSize: 40 }} />
        <BiCameraMovie style={{ fontSize: 40 }} />
        <MdOutlineDirectionsBike style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};

export default Interests;
