import React from 'react';
import { Form, FormGroup, FormControl, Button, InputGroup, ResponsiveEmbed } from 'react-bootstrap';

class YouTube extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.searchYouTube = this.searchYouTube.bind(this);

    this.state = {
      data: [],
      isLoading: false,
      searchTerm: 'Rei Kawakubo',
    };
  }


  handleSearchTermChange(event){
    this.setState({searchTerm: event.target.value});
  }

  componentDidMount() {
    this.searchYouTube();
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.searchYouTube();
  }


  searchYouTube() {
    const myInit = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
    };

    const { data, searchTerm } = this.state;

    const request = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchTerm}&maxResults=3&order=viewCount&publishedAfter=2017-01-01T00:00:00Z&key=AIzaSyBAv3_8ITzuxD10Wc3HVeziuqmSW5EcP7A`;

    fetch(request, { myInit })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((json) => {
        this.setState({ data: json.items, isLoading: false });
      })
      .catch((error) => {
        console.error('this is a fetch error', error);
      });
  }


  render() {
    const isLoading = this.state.isLoading;
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
              <InputGroup.Addon>
                Watch YouTube:
              </InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="Search for something..."
                value={this.state.searchTerm}
                onChange={this.handleSearchTermChange}
              />
              {' '}
              <InputGroup.Button>
                <Button
                  type="submit"
                  bsStyle="primary"
                  disabled={isLoading}
                  onClick={!isLoading ? null : null}
                >
                  {isLoading ? 'Loading...' : 'Search'}
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Form>

        <div id="youtube-results"></div>
          {this.state.data.map((item) => {
            return (
              <div className="video-item" key={item.id.videoId} >
                <h5>{item.snippet.title}</h5>
                {/*<ResponsiveEmbed a16by9>*/}
                <iframe className="video" src={`https://www.youtube.com/embed/${item.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
                {/*</ResponsiveEmbed>*/}
              </div>
            );
          })}
      </section>
    );
  }
}

export default YouTube;
