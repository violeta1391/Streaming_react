import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Series from './Components/Series'
import Movies from './Components/Movies'

import {
  BrowserRouter as HashRouter,
  Switch,
  HashRouter
} from "react-router-dom";


ReactDOM.render(
  <HashRouter>
    <Header />
    <Switch>
      <HashRouter path="/Series">
        <Series />
      </HashRouter>

      <HashRouter path="/Movies">
      <Movies />
      </HashRouter>

      <HashRouter path="/">
        <Home />
      </HashRouter>

    </Switch>
    <Footer />
  </HashRouter>,
  document.getElementById('root')
);