import React from 'react';
import { Link, Route } from 'react-router-dom';
import Loader from './Loader.jsx';
import Pager from 'react-pager';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageChanged = this.handlePageChanged.bind(this);
    this.getTheNews = this.getTheNews.bind(this);

    this.state = {
      data: [],
      loading: true,
      total: 10,
      currentPage: 0,
      visiblePages: 3,
    };
  }

  handlePageChanged(newPage) {
    this.setState({ currentPage: newPage });
  }

  getTheNews(e) {
    e.preventDefault();
    console.log('getTheNews button clicked')
    this.componentDidMount();
  }

  componentDidMount () {
    const myInit = { 
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    };

    fetch('https://content.guardianapis.com/search?section=fashion&order-by=newest&page-size=50&q=business&api-key=7df519db-080e-4ab3-98fe-a36d60896d5c', { myInit })
      .then((response) => {
        if(response.ok){
          return response.json()
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => {
        this.setState({data: response.response.results, loading: false});
      })
      .catch((error) => {
        console.error('this is a fetch error', error);
    });
  }

  render () {

    if(this.state.loading){
      return (
        <section className="news-api">
          <Loader />
        </section>
      )
    }

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
          <button id="get-news-button" className="btn btn-primary" onClick={this.getTheNews} >Get the news</button>
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
          titles={{ first: '|<', last: '>|' }}
          className="pagination-sm pull-right"
          onPageChanged={this.handlePageChanged}
        />
      </section>
    );
  }
}

export default News;