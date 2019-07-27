import React, {useState}  from 'react';

import Card from '../../components/card/Card';

import './List.scss';


export default function List(props) {
  console.log(props.category);
  const [rotatedCard, setRotatedCard] = useState(null);

  function changeRotatedCard(company) {
    if (rotatedCard === null || rotatedCard !== company)
      setRotatedCard(company)
    else
      setRotatedCard(null);
  }

  return (
    <div className="list">
      {props.category.content.map((item,i) => (
        <Card
          item={{
            id: item.title,
            img: item.img,
            frontTitle: item.title,
            frontSubtitle: item.subtitle,
            backTitle: item.period,
            backSubtitle: item.location,
            text: item.description
          }}
          rotatedCard={rotatedCard}
          changeRotatedCard={changeRotatedCard}
          key={i}
        />
      ))}
    </div>
  ); 
}
