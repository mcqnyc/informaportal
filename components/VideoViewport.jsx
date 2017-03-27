import React from 'react';
import { Link } from 'react-router';

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