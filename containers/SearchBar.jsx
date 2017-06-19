import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/action-creators';
import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    console.log('this.state.term', this.state.term);
    
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render () {
    return (
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
            <InputGroup.Button>
              <Button type="submit">Submit</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
