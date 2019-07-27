import React, {useState}  from 'react';

import Card from '../../components/card/Card';

import './Education.scss';


export default function Education(props) {
  const [rotatedCard, setRotatedCard] = useState(null);

  function changeRotatedCard(company) {
    if (rotatedCard === null || rotatedCard !== company)
      setRotatedCard(company)
    else
      setRotatedCard(null);
  }

  return (
    <div className="education">
      {props.education.content.map((e,i) => (
        <Card
          item={{
            id: e.school,
            img: e.img,
            frontTitle: e.school,
            frontSubtitle: e.degree,
            backTitle: e.location,
            backSubtitle: e.period,
            text: e.description
          }}
          rotatedCard={rotatedCard}
          changeRotatedCard={changeRotatedCard}
          key={i}
        />
      ))}
    </div>
  ); 
}
