import React from 'react';
import { Link } from 'react-router-dom';
import News from '../components/News.jsx';
import VideoViewport from '../components/VideoViewport.jsx';

class Landing extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          
          <div className="col-sm-4">
            <VideoViewport />
          </div>
          
          <div className="col-sm-4">
            <News />
          </div>
          
          <div className="col-sm-4">
            <News />
          </div>

        </div>
      </div>
    );
  }
}

export default Landing;