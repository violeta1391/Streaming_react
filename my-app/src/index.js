import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Series from './Components/Series'
import Movies from './Components/Movies'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route path="/Series">
        <Series />
      </Route>

      <Route path="/Movies">
      <Movies />
      </Route>

      <Route path="/">
        <Home />
      </Route>

    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
);