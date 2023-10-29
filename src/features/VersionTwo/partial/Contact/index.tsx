import React from 'react';
import { IoHome } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaBirthdayCake } from 'react-icons/fa';

import Avatar from 'src/assets/images/avatar/large.png';
import './index.css';

const ContactPartial = () => {
  return (
    <div className="user">
      <img src={Avatar} className="user__avatar" alt="John Doe" />
      <h1 className="user__name">John Doe</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <IoHome /> 22 rue du codeur 75001 Paris
        </p>
        <p className="user__info">
          <BsFillTelephoneFill /> <a href="tel:+33606060606">0606060606</a>
        </p>
        <p className="user__info">
          <GrMail /> <a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a>
        </p>
        <p className="user__info">
          <FaBirthdayCake /> Date de naissance: 22 Mai 2000
        </p>
      </div>
    </div>
  );
};

export default ContactPartial;
