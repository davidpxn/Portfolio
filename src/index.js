import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';

import App from './App';
import * as serviceWorker from './serviceWorker';


import 'aos/dist/aos.css';


ReactDOM.render (
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

AOS.init();
serviceWorker.register();
