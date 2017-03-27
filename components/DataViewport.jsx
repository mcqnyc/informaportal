import React from 'react';
import { Link } from 'react-router';

class DataViewport extends React.Component {
  render () {
    return (
      <section className="news-api">
        <div className="news-button-group">
          <h5>Fashion News</h5>
          <button id="get-news-button" className="btn btn-primary">Get the news</button>
        </div>
        <ul id="news-content"></ul>
        <div className="pagination"></div>
      </section>
    );
  }


}

export default DataViewport;