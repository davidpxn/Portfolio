import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom'

import About from './routes/about/About';
import Experience from './routes/experience/Experience';
import Education from './routes/education/Education';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'

import './App.scss';
import data from './data.json';


function App() {
  return (
    <div className="app">
      <Helmet defaultTitle="Portfolio" titleTemplate="Portfolio - %s" />
      <Navbar tabs={data.categories} />
      <Switch>
        <Route
          exact path='/'
          render={(props) => <About {...props} info={data.info} />}
  	    />
        <Route
          exact path='/experience'
          render={(props) => <Experience {...props} experience={data.categories.find(c => c.slug === 'experience')} />}
        />
        <Route
          exact path='/education'
          render={(props) => <Education {...props} education={data.categories.find(c => c.slug === 'education')} />}
  	    />
      </Switch>
      <Footer info={data.info}/>
    </div>
  );
}

export default App;
