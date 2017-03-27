import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Landing from '../components/Landing.jsx';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import Footer from '../components/Footer.jsx';

// import '../public/css/reset.css';
// import '../public/css/style.css';

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className="app">

          <Header />

          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          

          <Footer />

        </div>
      </BrowserRouter>
    );
  }
});

render(<App />, document.getElementById('app'));
