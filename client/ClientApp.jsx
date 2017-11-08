import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Footer from '../components/Footer';

import '../public/styles/reset.css';
import '../public/styles/bootstrap.css';
// import '../public/styles/grid.css';
import '../public/styles/style.css';
import '../public/styles/queries.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">

        <Header />
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
