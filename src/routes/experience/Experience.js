import React, {useState}  from 'react';

import Card from '../../components/card/Card';

import './Experience.scss';


export default function Experience(props) {
  const [rotatedCard, setRotatedCard] = useState(null);

  function changeRotatedCard(company) {
    if (rotatedCard === null || rotatedCard !== company)
      setRotatedCard(company)
    else
      setRotatedCard(null);
  }

  return (
    <div className="experience">
      {props.experience.content.map((job,i) => (
        <Card
          item={{
            id: job.company,
            img: job.img,
            frontTitle: job.company,
            frontSubtitle: job.position,
            backTitle: job.location,
            backSubtitle: job.period,
            text: job.description
          }}
          rotatedCard={rotatedCard}
          changeRotatedCard={changeRotatedCard}
          key={i}
        />
      ))}
    </div>
  ); 
}
