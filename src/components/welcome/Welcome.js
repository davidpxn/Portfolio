import React, { useRef, useEffect } from 'react';

import './Welcome.scss';


export default function Welcome(props) 
{
  const welcomingElement = useRef(null);

  useEffect(() => {
    welcomingElement.current.addEventListener("animationend", () => props.setIsWelcoming(false));
  });

  return (
    <div
      className="welcome"
      ref={welcomingElement}
      style={{ height: window.innerHeight, width: window.innerWidth }}
    >
      <h1>{props.title}</h1>
    </div>
  );
}
