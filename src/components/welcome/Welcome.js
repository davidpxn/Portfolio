import React, { useRef, useEffect } from 'react';

import './Welcome.scss';


export default function Welcome(props) 
{
  const animations = 2;
  let animationCount = 0;
  const welcomingElement = useRef(null);

  useEffect(() => {
    welcomingElement.current.addEventListener("animationend", () => {
      animationCount++;
      props.setIsWelcoming(animationCount !== animations);
    });
  });

  return (
    <div
      className="welcome"
      ref={welcomingElement}
      style={{ height: window.innerHeight, width: window.innerWidth }}
    >
      <h1>almost ready</h1>
    </div>
  );
}
