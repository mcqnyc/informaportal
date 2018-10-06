import React from 'react';
import Time from 'react-time';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Pagination } from 'react-bootstrap';
import { fetchNews } from '../actions/action-creators';
import './News.css';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.convertTheTimestamp = this.convertTheTimestamp.bind(this);

    this.state = {
      news: [],
      isLoading: false,
      activePage: 1,
    };
  }

  componentDidMount() {
    this.props.fetchNews();
  }

  convertTheTimestamp(webPublicationDate) {
    return new Date(webPublicationDate);
  }

  handleSelect(eventKey) {
    this.setState({ activePage: eventKey });
  }


  render() {
    const isLoading = this.state.isLoading;

    const { activePage } = this.state;
    const news = this.props.news;

    // Logic for displaying paginated news items
    const itemsPerPage = 5;
    const indexOfFirstItem = (activePage - 1) * itemsPerPage;
    const indexOfLastItem = activePage * itemsPerPage;
    const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <section id="news-api">
        <div id="news-button-group">
          <h4>Fashion News</h4>
          <Button
            bsStyle="primary"
            disabled={isLoading}
            onClick={!isLoading ? this.props.fetchNews : null}
          >
            {isLoading ? 'Loading...' : 'Get the news'}
          </Button>
        </div>
        <ul id="news-content">
          {currentItems.map(item => (
            <li key={item.id} >
              <Time value={this.convertTheTimestamp(item.webPublicationDate)} format="MMM DD,HH:mm" />:
              <a href={item.webUrl} rel="noopener noreferrer" target="_blank"> {item.webTitle}</a>
            </li>
          ),
          )}
        </ul>
        <div id="news-pagination">
          <Pagination
            prev
            next
            first
            last
            ellipsis={false}
            boundaryLinks
            items={10}
            maxButtons={3}
            activePage={this.state.activePage}
            onSelect={this.handleSelect}
          />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  console.log('@@@ NEWS state', state)
  // console.log('in mapStateToProps; news:', state.news)
  return { news: state.news };
}

// function mapStateToProps({ news }) {
//   console.log('in mapStateToProps; news:', news)
//   return { news };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
