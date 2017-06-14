import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect, Provider, applyMiddleware } from 'react-redux';
import store from '../store.js';
import Header from '../components/Header.jsx';
import Landing from '../components/Landing.jsx';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import Footer from '../components/Footer.jsx';

import '../public/styles/reset.css';
import '../public/styles/style.css';

export default class App extends Component {
  render () {
    return (
  <Provider store={store}>
      <BrowserRouter>
        <div className="app">

          <Header />

          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Redirect to="/" />

          <Footer />

        </div>
      </BrowserRouter>
  </Provider>
    );
  }
};

render(<App />, document.getElementById('app'));
