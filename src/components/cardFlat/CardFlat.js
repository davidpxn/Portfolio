import React from 'react';

import findImage from '../../images'

import Text from '../text/Text'
import Image from '../image/Image'

import './CardFlat.scss';


export default function CardFlat(props) 
{
  const item = props.item;
  const img = findImage(item.img);
  const fadeType = props.index % 2 === 0 ? 'fade-left' : 'fade-right';

  return (
    <div className="card-flat" data-aos={fadeType} data-aos-duration="1000" data-aos-once="true">
      <div className="card-flat__img-container">
        <Image className="card-flat__img" src={img} alt={item.title} color={item.color} />
      </div>

      <div className="card-flat__info">
        <div className="card-flat__header">
          <svg width="70" height="5">
            <rect width="70" height="5" style={{fill: item.color}} />
          </svg>
          <h2 className="card-flat__title">{item.title}</h2>
        </div>

        <h3 className="card-flat__subtitle" style={{color: item.color}}>{item.subtitle}</h3>
        <h4 className="card-flat__period">{item.period}</h4>

        <div className="card-flat__text">
          <Text text={item.description}/>
        </div>

        {item.location &&
          <div className="card-flat__location">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <title>Location</title>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <h4>{item.location}</h4>
          </div>
        }
      </div>
    </div>
  );
}
