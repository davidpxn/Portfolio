import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom'

import About from './routes/about/About';
import List from './routes/list/List';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'

import './App.scss';
import data from './data.json';


function App() {
  const navbarCategories = [...data.categories];
  navbarCategories.unshift (
    {
      title: 'About',
      slug: ''
    }
  )
  
  return (
    <div className="app">
      <Helmet defaultTitle="Portfolio" titleTemplate="Portfolio - %s" />
      <Navbar tabs={navbarCategories} />
      <Switch>
        <Route
          exact path='/'
          render={(props) => <About {...props} info={data.info} />}
        />
        {data.categories.map((category) => (
          <Route
            exact path={`/${category.slug}`}
            render={(props) => <List {...props} category={category} />}
          />
        ))}
      </Switch>
      <Footer info={data.info}/>
    </div>
  );
}

export default App;
