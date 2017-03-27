import React from 'react';
import { Link } from 'react-router-dom';
import preload from '../testNewsData.json';
import Pager from 'react-pager';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageChanged = this.handlePageChanged.bind(this);

    this.state = {
      data: preload,
      total: preload.length * 0.2,
      currentPage: 0,
      visiblePages: 3,
    };
  }

  handlePageChanged(newPage) {
    this.setState({ currentPage: newPage });
  }

  render () {

    const { data, currentPage, visiblePages } = this.state;
    // Logic for displaying news items
    const itemsPerPage = 5;
    let indexOfFirstItem = currentPage;
    let indexOfLastItem = indexOfFirstItem + itemsPerPage;
    let currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <section className="news-api">
        <div className="news-button-group">
          <h5>Fashion News</h5>
          <button id="get-news-button" className="btn btn-primary">Get the news</button>
        </div>
        <ul id="news-content">
          {currentItems.map((item) => {
            return (
              <li key={item.id} ><Link to={item.webUrl} target="_blank">{item.webTitle}</Link></li>
            );
          })}
        </ul>
        <Pager 
          total={this.state.total}
          current={this.state.currentPage}
          visiblePages={this.state.visiblePages}
          titles={{ first: '<|', last: '>|' }}
          className="pagination-sm pull-right"
          onPageChanged={this.handlePageChanged}
        />
      </section>
    );
  }
}

export default News;