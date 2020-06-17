import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';


export default function Navbar(props) 
{
  const isDesktop = props.windowWidth > props.mediaQueryPoints.pointTabletDesktop;

  return (
    <nav>
      <ul className="navbar">
        {props.tabs.map((tab, i) => (
          <NavLink
            className="navbar__tab"
            activeClassName="navbar__tab--selected"
            exact to={`/${tab.slug}`}
            key={tab.slug}
            style={isDesktop ? { animation: `slide-right ${500 + i*400}ms ease` } : { animation: `slide-down ${500 + i*400}ms ease` }}
            replace
          >
            {tab.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
