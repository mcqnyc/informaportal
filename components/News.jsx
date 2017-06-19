import React from 'react';
import { Link, Route } from 'react-router-dom';
import Loader from './Loader.jsx';
import Time from 'react-time';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, Button, InputGroup, Pagination } from 'react-bootstrap';


class News extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.getTheNews = this.getTheNews.bind(this);
    this.convertTheTimestamp = this.convertTheTimestamp.bind(this);

    this.state = {
      data: [],
      loading: true,
      activePage: 1
    };
  }

  handleSelect(eventKey) {
    this.setState({ activePage: eventKey });
  }

  getTheNews(e) {
    e.preventDefault();
    this.componentDidMount();
  }

  convertTheTimestamp(webPublicationDate) {
    return new Date(webPublicationDate);
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
        console.error('fetch error in the News API', error);
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

    const { data, activePage } = this.state;

    // Logic for displaying paginated news items
    const itemsPerPage = 5;
    let indexOfFirstItem = (activePage - 1) * itemsPerPage;
    let indexOfLastItem = activePage * itemsPerPage;
    let currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <section className="news-api">
        <div className="news-button-group">
          <h2>Fashion News</h2>
          <button id="get-news-button" className="btn btn-primary" onClick={this.getTheNews} >Get the news</button>
        </div>
        <ul id="news-content">
          {currentItems.map((item) => {
            return (
              <li key={item.id} >
                <Time value={this.convertTheTimestamp(item.webPublicationDate)} format="MMM DD,HH:mm" />:
                <Link to={item.webUrl} target="_blank"> {item.webTitle}</Link>
              </li>
            );
          })}
        </ul>
        <Pagination 
          prev
          next
          first
          last
          ellipsis={false}
          boundaryLinks
          items={10}
          maxButtons={6}
          activePage={this.state.activePage}
          onSelect={this.handleSelect}
        />
      </section>
    );
  }
}

export default News;