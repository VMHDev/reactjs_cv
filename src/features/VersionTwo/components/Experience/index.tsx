import React from 'react';

interface IMission {
  id: number;
  title: string;
}

interface IDatas {
  id: number;
  date: string;
  title: string;
  location: string;
  text: string;
  missions: Array<IMission>;
}

interface ExperienceProps {
  datas: Array<IDatas>;
}

const Experience = (props: ExperienceProps) => {
  const datas = props.datas;

  return (
    <div className="cursus">
      <h2>Expériences professionelles</h2>
      {datas.map((item) => (
        <div className="grid__row" key={item.id}>
          <div className="grid__item">
            <p className="grid__date">{item.date}</p>
          </div>
          <div className="grid__item">
            <h3 className="grid__title">{item.title}</h3>
            <p className="grid__location">{item.location}</p>
            <p className="grid__text">{item.text}</p>
            <ul className="grid__missions">
              {item.missions.map((mission) => (
                <li className="grid__mission" key={mission.id}>
                  {mission.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
