import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import { fetchStocks } from '../actions/action-creators';
import StocksList from '../containers/StocksList';

class SearchStocks extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchStocks(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <section className="weather-api">
        <div className="search-weather-api">
          <Form inline onSubmit={this.onFormSubmit}>
            <FormGroup controlId="formInlineSearch" >
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="e.g. AAPL, GOOGL, IBM"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
                {' '}
                <InputGroup.Button>
                  <Button
                    type="submit"
                    bsStyle="primary"
                  >
                  Get stock quotes
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </div>

        <StocksList />
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStocks }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchStocks);
