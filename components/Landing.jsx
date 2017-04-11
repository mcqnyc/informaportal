import React from 'react';
import { Route } from 'react-router-dom';
import News from './News.jsx';
import YouTube from './YouTube.jsx';

class Landing extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="navbar-spacer"></div>
        
        <div className="row">
          
          <section className="col-1">
            <YouTube />
          </section>
          
        
          <section className="col-1">
            <News />
          </section>

        </div>
      </div>
    );
  }
}

export default Landing;