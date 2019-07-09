import React from 'react';

import Profile from '../../components/profile/Profile';

import './About.scss';


export default function About(props) {
  return (
    <Profile info={props.info}/>
  );
}
