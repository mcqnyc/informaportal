import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
// import { fetchStocks } from '../actions/action-creators';
// import StocksList from '../containers/StocksList';
import Time from 'react-time';
import axios from 'axios';

class SearchStocks extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.fetchStocks = this.fetchStocks.bind(this);

    this.state = {
      data: [],
      isLoading: false,
      searchTerm: 'AAPL,IBM,GOOGL',
    };
  }

  componentDidMount() {
    this.fetchStocks(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.fetchStocks(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  fetchStocks(stockQuery) {
    if (!stockQuery) {
      stockQuery = 'AAPL';
    }

    const myInit = {
      method: 'GET',
      mode: 'no-cors',
      cache: 'default',
    };

    // const { data, searchTerm } = this.state;
    // const url = `${ROOT_URL}&q=${city}&days=5`;
    // const request = axios.get(url);
    // var myRequest = new Request('flowers.jpg');

    const API_KEY_STOCKS = '0549eabf300590e088cf25b85572bbfe';
    const ROOT_URL_STOCKS = `https://marketdata.websol.barchart.com/getQuote.json?key=${API_KEY_STOCKS}`;
    const request = new Request(`${ROOT_URL_STOCKS}&symbols=${stockQuery}`);
    
    // const request = `https://marketdata.websol.barchart.com/getQuote.json?key=${API_KEY_STOCKS}`;
    console.log(request);
    fetch(request, { myInit })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((json) => {
        this.setState({ data: json.items, isLoading: false });
      })
      .catch((error) => {
        console.error('this is a fetch error:', error);
      });
  }


  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <section className="youtube-api">
    //       <Loader />
    //     </section>
    //   );
    // }

    return (
      <section className="youtube-api">
        <Form inline onSubmit={this.onFormSubmit} >
          <FormGroup controlId="formInlineSearch" >
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Enter stock(s), e.g.: AAPL,GOOGL,IBM"
                value={this.state.searchTerm}
                onChange={this.handleSearchTermChange}
              />
              {' '}
              <InputGroup.Button>
                <Button
                  type="submit"
                  bsStyle="primary"
                >
                Get a quote
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Form>
        <pre><code>{JSON.stringify(this.state.data, null, 4)}</code></pre>
        {/*<div id="stock-results" />
        {this.state.data.map(item => (
          <div className="stock-item" key={item.id.videoId} >
            <h5>{item.snippet.title}</h5>
            <iframe className="video" title={item.snippet.title} src={`https://www.youtube.com/embed/${item.id.videoId}`} frameBorder="0" allowFullScreen />
          </div>
          ),
        )}
        */}
      </section>
    );
  }
}

export default SearchStocks;
