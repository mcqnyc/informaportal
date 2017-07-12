import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import { fetchWeather } from '../actions/action-creators';
import WeatherList from '../containers/WeatherList';

class SearchBar extends React.Component {
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
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <section className="news-api">
        <Form inline onSubmit={this.onFormSubmit} >
          <FormGroup controlId="formInlineSearch" >
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Get a five-day forecast in your favorite cities"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              {' '}
                <Button type="submit">Submit</Button>
            </InputGroup>
          </FormGroup>
        </Form>
        <WeatherList />
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
