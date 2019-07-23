import React from 'react';

import './ExperienceModalBox.scss';


export default function ExperienceModalBox(props) {
  const job = props.job;

  function closeModal(e) {
    if (e.target === document.querySelector(".experience-modal")) {
      props.toggleModal();
    }
  }


  return (
    <div className="experience-modal" onClick={closeModal}>
      <div className="experience-modal__box">
        <header className="experience-modal__header">
          <h2 className="experience-modal__company">{job.company}</h2>
          <div className="experience-modal__location">
            <svg className="experience-modal__location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Location</title>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <h3 className="experience-modal__location-text">{job.location}</h3>
          </div>
        </header>

        <div className="experience-modal__content">
          <h4 className="experience-modal__period">{job.period}</h4>
          {job.description.split('\n').map((text,i) => (
            <p className="experience-modal__description" key={i}> {text} </p>
          ))}
        </div>
      </div>
    </div>
  );
}
