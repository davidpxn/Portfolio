import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';


export default function Navbar(props) {
  return (
    <nav>
      <ul className="navbar">
        {props.tabs.map(tab => (
          <NavLink className="navbar__tab" activeClassName="navbar__tab--selected" exact to={`/${tab.slug}`} key={tab.slug}>
            {tab.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
