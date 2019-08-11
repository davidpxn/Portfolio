import React, { useState, useRef, useEffect } from 'react';

import './Image.scss';


export default function Image(props)
{
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgElement = useRef(null);
  const containerElement = useRef(null);

  useEffect(() => {
    imgElement.current.addEventListener(
      "animationend",
      () => containerElement.current.style.backgroundColor = 'transparent'
    );
  });

  return (
    <div className="image" ref={containerElement} style={{backgroundColor: props.color}}>
      <img
        className={props.className + (imageLoaded ? ' image__img-visable' : ' image__img-hidden')}
        src={props.src}
        alt={props.alt}
        ref={imgElement}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}
