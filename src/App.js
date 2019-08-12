import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import About from './routes/about/About';
import List from './routes/list/List';

import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';

import './App.scss';
import data from './data.json';


export default function App()
{
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isWelcoming, setIsWelcoming] = useState(true);

  window.addEventListener(
    "resize",
    () =>
    {
      const width = window.innerWidth;
      if (width !== windowWidth) 
      {
        setWindowWidth(width);
      }
    }
  );


  let renderElement;
  if (isWelcoming)
  {
    renderElement = <Welcome title={data.info.shortName} setIsWelcoming={setIsWelcoming} />;
  }
  else
  {
    const navbarCategories = [...data.categories];
    navbarCategories.unshift(
      {
        title: 'About',
        slug: ''
      }
    );
    
    renderElement = (
      <React.Fragment>
        <Navbar tabs={navbarCategories} windowWidth={windowWidth} />
        <Switch>
          <Route
            exact path='/'
            render={(props) => <About {...props} info={data.info} />}
          />
          {data.categories.map((category) => (
            <Route
              exact path={`/${category.slug}`}
              render={(props) => <List {...props} category={category} windowWidth={windowWidth} />}
              key={category.slug}
            />
          ))}
        </Switch>
      </React.Fragment>
    );
  }

  return (
    <div>
      {renderElement}
    </div>
  );
}
