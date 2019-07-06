import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom'

import About from './routes/about/About';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'

import './App.scss';
import data from './data.json';


function App() {
  console.log(data);
  return (
    <div className="app">
      <Helmet defaultTitle="Portfolio" titleTemplate="Portfolio - %s" />
      <Navbar tabs={data.categories} />
      <Switch>
        <Route exact path="/" component={About}/>
      </Switch>
      <Footer contactInfo={data.contactInfo}/>
    </div>
  );
}

export default App;
