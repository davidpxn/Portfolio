import React from 'react';

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
      {info.about.split('\n').map((p,i) => (
        <p className="profile__about" key={i}> {p} </p>
      ))}
    </div>
  );
}
