import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import { fetchWeather } from '../actions/action-creators';
import WeatherList from './WeatherList';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchWeather();
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
      <section className="weather-api">
        <div className="search-weather-api">
          <Form inline onSubmit={this.onFormSubmit}>
            <FormGroup controlId="formInlineSearch" >
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Get a 5-day forecast in any city"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
                {' '}
                <InputGroup.Button>
                  <Button
                    type="submit"
                    bsStyle="primary"
                  >
                  Get the weather
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </div>

        <WeatherList />
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Weather);
