import React from 'react';

import Text from '../text/Text'

import './Profile.scss';


export default function Profile(props)
{
  const info = props.info;
  const names = info.name.split(' ');
  const firstName = names[0];
  const restName = names.slice(1).join(' ');

  return (
    <div className="profile">
      <img className="profile__img" src={info.img} alt={info.name} />
      <h2 className="profile__name">
        {firstName} <br/>
        {restName}
      </h2> 
      <div className="profile__about">
        <Text text={info.about} align="center"/>
      </div>
      <div className="profile__contact-links">
        <a className="profile__contact-link" href={info.messenger} target="_blank" rel="noopener noreferrer">
          <svg className="profile__contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>Messenger</title>
            <path d="M12 2C6.52 2 2 6.234 2 11.5c0 2.625 1.2 4.945 3 6.656v4.469l4.188-2.094c.898.254 1.82.469 2.812.469 5.48 0 10-4.234 10-9.5S17.48 2 12 2zm0 2c4.46 0 8 3.379 8 7.5S16.46 19 12 19c-.941 0-1.84-.152-2.688-.438l-.406-.125-.375.188-1.531.75v-2l-.344-.313C5.023 15.68 4 13.707 4 11.5 4 7.379 7.54 4 12 4zm-.938 5.031L6.157 14.22l4.407-2.469 2.374 2.531 4.844-5.25-4.312 2.406z" />
          </svg>
        </a>
        <a className="profile__contact-link" href={`mailto: ${info.email}`}>
          <svg className="profile__contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>Email</title>
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
          </svg>
        </a>
        <a className="profile__contact-link" href={info.github} target="_blank" rel="noopener noreferrer">
          <svg className="profile__contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
            <title>GitHub</title>
            <path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
