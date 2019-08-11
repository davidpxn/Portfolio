import React from 'react';
import classNames from 'classnames';

import Text from '../text/Text'
import Image from '../image/Image'

import './CardFlip.scss';


export default function CardFlip(props) 
{
  const item = props.item;

  return (
    <div className="card-container" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
      <div className={classNames('card', {'card--flip': props.rotatedCard === item.id})} onClick={() => props.changeRotatedCard(item.id)}>
        <div className="card--front">
          <div className="card--front__img-container">
            <Image className="card--front__img" src={item.img} alt={item.title} color={item.color} />
          </div>
          <div className="card--front__info">
            <h2 className="card--front__title">{item.title}</h2>
            <h3 className="card--front__subtitle" style={{color: item.color}}>{item.subtitle}</h3>
          </div>
        </div>

        <div className="card--back">
          <div className="card--back__info">
            <h4 className="card--back__title">{item.period}</h4>
            <h4 className="card--back__subtitle">{item.location}</h4>
          </div>
          <div className="card--back__text">
            <Text text={item.description}/>
          </div>
        </div>
      </div>
    </div>   
  );
}
