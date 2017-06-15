import React from 'react';
import { Link } from 'react-router-dom';

// Jun 8, this isn't being used as yet
// i may modify it so that it's a reusable component

class VideoViewport extends React.Component {
  render () {
    return (
      <section className="youtube-api">
        <h5>Watch YouTube</h5>
        <div className="input-group">
          <input type="text" id="youtube-search-field" placeholder="Search for something..." autoComplete="off" className="form-control" />
          <span className="input-group-btn">
            <button type="button" id="youtube-search-button" className="btn btn-primary">Search</button>
          </span>
        </div>
        <div id="youtube-results"></div>
      </section>
    );
  }


}

export default VideoViewport;