import React, {useState}  from 'react';

import CardFlip from '../../components/cardFlip/CardFlip';
import CardFlat from '../../components/cardFlat/CardFlat';

import './List.scss';


export default function List(props)
{
  const [rotatedCard, setRotatedCard] = useState(null);

  function changeRotatedCard(cardID) 
  {
    if (rotatedCard === null || rotatedCard !== cardID)
      setRotatedCard(cardID);
    else
      setRotatedCard(null);
  }

  
  if (props.windowWidth < 800) 
  {
    return (
      <div className="list">
        {props.category.content.map((item) => (
          <CardFlip
            item={item}
            rotatedCard={rotatedCard}
            changeRotatedCard={changeRotatedCard}
            key={item.id}
          />
        ))}
      </div>
    ); 
  }
  else
  {
    return (
      <div className="list">
        {props.category.content.map((item,i) => (
          <CardFlat
            item={item}
            index={i}
            key={item.id}
          />
        ))}
      </div>
    ); 
  }
}
