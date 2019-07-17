import React from 'react';

import ExperienceCard from '../../components/experienceCard/ExperienceCard';

import './Experience.scss';


export default function Experience(props) {
  return (
    <div className="experience">
      {props.experience.content.map((job,i) => (
        <ExperienceCard job={job} key={i}/>
      ))}
    </div>
  ); 
}
