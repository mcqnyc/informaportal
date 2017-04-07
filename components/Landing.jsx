import React from 'react';
import { Route } from 'react-router-dom';
import News from './News.jsx';
import YouTube from './YouTube.jsx';

class Landing extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          
          <div className="col-sm-6">
            <YouTube />
          </div>
          
        
          <div className="col-sm-6">
            <News />
          </div>

        </div>
      </div>
    );
  }
}

export default Landing;