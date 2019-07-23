import React from 'react';

import './Text.scss';


export default function Text(props) {
  return (
    <div className="text" style={{ textAlign: props.align}}>
      {props.text.split('\n').map((paragraph,i) => (
        <p className="text__paragraph" key={i}> {paragraph} </p>
      ))}
    </div>
  );
}
