import React from 'react';
import { Link } from 'react-router-dom';
import preload from '../testNewsData.json';

class News extends React.Component {
  render () {
    return (
      <section className="news-api">
        <div className="news-button-group">
          <h5>Fashion News</h5>
          <button id="get-news-button" className="btn btn-primary">Get the news</button>
        </div>
        <ul id="news-content">
          {preload.map((data) => {
            return (
              <li key={data.id} ><Link to={data.webUrl} target="_blank">{data.webTitle}</Link></li>
            );
          })}
        </ul>
        <div className="pagination"></div>
      </section>
    );
  }
}

export default News;