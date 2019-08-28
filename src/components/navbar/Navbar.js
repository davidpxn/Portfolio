import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';


export default function Navbar(props) 
{
  const isMobile = props.windowWidth < props.mediaQueryPoints.pointPhoneTablet;

  return (
    <nav>
      <ul className="navbar">
        {props.tabs.map((tab, i) => (
          <NavLink
            className="navbar__tab"
            activeClassName="navbar__tab--selected"
            exact to={`/${tab.slug}`}
            key={tab.slug}
            style={isMobile ? { animation: `slide-down ${300 + i*300}ms ease` } : { animation: `slide-right ${300 + i*300}ms ease` }}
            replace
          >
            {tab.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
