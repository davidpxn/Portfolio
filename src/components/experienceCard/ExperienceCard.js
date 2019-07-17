import React from 'react';

import './ExperienceCard.scss';


export default function Footer(props) {
  const job = props.job;

  return (
    <div className="experience-card">
      <div className="experience-card__img-container">
        <img className="experience-card__img" src={job.img} alt={job.company} />
      </div>
      <div className="experience-card__info">
        <h2 className="experience-card__company">{job.company}</h2>
        <h3 className="experience-card__position">{job.position}</h3>
      </div>
    </div>
  );
}
