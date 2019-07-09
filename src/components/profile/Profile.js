import React from 'react';

import './Profile.scss';


export default function Profile(props) {
  const info = props.info;

  return (
    <div className="profile">
      <img className="profile__img" src={info.img} alt="Davíð Phuong Xuan Nguyen"/>
      <p className="profile__name"> {info.name} </p> 
      <div className="profile__contact">
        <p>{info.email}</p>
        <p>{info.phone}</p>
      </div>  
      {info.about.split('\n').map((p,i) => (
        <p className="profile__about" key={i}> {p} </p>
      ))}
    </div>
  );
}
