import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import { fetchNews } from '../actions/action-creators';
import News from '../components/News';

class SearchNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      activePage: 1,
      term: '',
    };

    // this.onInputChange = this.onInputChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
    // this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.fetchNews();
  }

  

  // onInputChange(event) {
  //   this.setState({ term: event.target.value });
  // }

  // onFormSubmit(event) {
  //   event.preventDefault();
  //   this.props.fetchWeather(this.state.term);
  //   this.setState({ term: '' });
  // }

  // handleSelect(eventKey) {
  //   this.setState({ activePage: eventKey });
  // }

  render() {
    const isLoading = this.state.isLoading;

    const { data, activePage } = this.state;

    // Logic for displaying paginated news items
    const itemsPerPage = 5;
    const indexOfFirstItem = (activePage - 1) * itemsPerPage;
    const indexOfLastItem = activePage * itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <section className="news-api">
        <div className="news-button-group">
          <h2>Fashion News</h2>
          <Button
            bsStyle="primary"
            disabled={isLoading}
            onClick={!isLoading ? this.handleClick : null}
          >
            {isLoading ? 'Loading...' : 'Get the news'}
          </Button>
        </div>
        
        <News />

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
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchNews);
