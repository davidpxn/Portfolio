import React from 'react';
import classNames from 'classnames';

import Text from '../text/Text'

import './Card.scss';


export default function Card(props) {
  const item = props.item;
  const rotatedCard = props.rotatedCard;
  const changeRotatedCard = props.changeRotatedCard;

  return (
    <div className="card-container">
      <div className={classNames('card', {'card--flip': rotatedCard === item.id})} onClick={() => changeRotatedCard(item.id)}>
      
        <div className="card--front">
          <div className="card--front__img-container">
            <img className="card--front__img" src={item.img} alt={item.frontTitle} />
          </div>
          <div className="card--front__info">
            <h2 className="card--front__title">{item.frontTitle}</h2>
            <h3 className="card--front__subtitle">{item.frontSubtitle}</h3>
          </div>
        </div>

        <div className="card--back">
          <div className="card--back__info">
            <h2 className="card--back__title">{item.backTitle}</h2>
            <h2 className="card--back__subtitle">{item.backSubtitle}</h2>
          </div>
          <div className="card--back__text">
            <Text text={item.text}/>
          </div>
        </div>

      </div>
    </div>   
  );
}
