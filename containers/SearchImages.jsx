import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
// import { fetchImages } from '../actions/action-creators';

class SearchImages extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.fetchImages = this.fetchImages.bind(this);

    this.state = {
      data: [],
      isLoading: false,
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.fetchImages(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.fetchImages(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  fetchImages(imageQuery) {
    if (!imageQuery) {
      imageQuery = 'fashion';
    }

    // const API_KEY_IMAGES = 'x5vej2chr3sgejjbej9942n7';
    const API_KEY_IMAGES = 'hf23xr92vcbq5n9xt8h5tjcq';
    const ROOT_URL_IMAGES = 'https://api.gettyimages.com/v3/search/images';
    const myInit = {
      method: 'GET',
      headers: { 'Api-Key': API_KEY_IMAGES },
      mode: 'cors',
      cache: 'default',
    };

    const request = new Request(`${ROOT_URL_IMAGES}?phrase=${imageQuery}`, myInit);

    fetch(request)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((json) => {
        this.setState({ data: json.images, isLoading: false });
      })
      .catch((error) => {
        console.error('this is a fetch error:', error);
      });
  }

  render() {
    return (
      <section className="image-search-api">
        <Form inline onSubmit={this.onFormSubmit} >
          <FormGroup controlId="formInlineSearch" >
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search for images..."
                value={this.state.searchTerm}
                onChange={this.handleSearchTermChange}
              />
              {' '}
              <InputGroup.Button>
                <Button
                  type="submit"
                  bsStyle="primary"
                >
                Get images
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Form>

        <div id="image-results" />
        {this.state.data.map(item => (
          <img
            src={item.display_sizes[0].uri}
            key={item.id}
            className="img-responsive img-thumbnail"
            alt={item.title}
          />
          ),
        )}

      </section>
    );
  }
}

export default SearchImages;
