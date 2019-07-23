import React from 'react';

import Text from '../text/Text'

import './Profile.scss';


export default function Profile(props) {
  const info = props.info;

  return (
    <div className="profile">
      <img className="profile__img" src={info.img} alt="Davíð Phuong Xuan Nguyen"/>
      <h2 className="profile__name"> {info.name} </h2> 
      <div className="profile__contact">
        <h3>{info.email}</h3>
        <h3>{info.phone}</h3>
      </div>  
      <div className="profile__about">
        <Text text={info.about} align="center"/>
      </div>
    </div>
  );
}
