import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Landing from '../components/Landing.jsx';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import Footer from '../components/Footer.jsx';

import '../public/styles/reset.css';
import '../public/styles/style.css';

// change this to be an ES6 class, 
// don't leave it like this, not even to show that you know how to use it

const App = React.createClass({
  render () {
    return (
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
    );
  }
});

render(<App />, document.getElementById('app'));
