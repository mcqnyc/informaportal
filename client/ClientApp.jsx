import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Footer from '../components/Footer';

import '../styles/normalize.css';
import '../styles/bootstrap.css';
import '../styles/style.scss';
import '../styles/queries.scss';
import './ClientApp.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div id="client-app">

        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Redirect to="/" />
        </Switch>
        <Footer />

      </div>
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById('app'));
