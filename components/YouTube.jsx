import React from 'react';
import Loader from './Loader.jsx';

class YouTube extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchYouTube = this.searchYouTube.bind(this);

    this.state = {
      data: [],
      loading: true,
      searchTerm: 'new york fashion week',
    };
  }


  handleSearchTermChange(event){
    this.setState({searchTerm: event.target.value});
  }


  handleSubmit(event){
    event.preventDefault();
    this.searchYouTube();
  }


  searchYouTube() {

    const myInit = { 
      method: 'GET',
      mode: 'cors',
      cache: 'default',
    };

    let { data, searchTerm } = this.state;

    let request = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchTerm}&maxResults=3&order=viewCount&publishedAfter=2017-01-01T00:00:00Z&key=AIzaSyBAv3_8ITzuxD10Wc3HVeziuqmSW5EcP7A`;

    fetch(request, { myInit })
      .then((response) => {
        if(response.ok){
          return response.json()
        }
        throw new Error('Network response was not ok.');
      })
      .then(json => {
        this.setState({data: json.items, loading: false});
      })
      .catch(error => {
        console.error('this is a fetch error', error);
    });
  }


  componentDidMount () {
    this.searchYouTube();
  }


  render () {
    if(this.state.loading){
      return (
        <section className="youtube-api">
          <Loader />
        </section>
      )
    }

    return (
      <section className="youtube-api">
        <h5>Watch YouTube</h5>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search for something..." className="form-control" value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
            <input type="submit" className="btn btn-primary form-control" value="Search" />
          </form>
        <div id="youtube-results"></div>
          {this.state.data.map((item) => {
            return (
              <div className="item" key={item.id.videoId} >
                  <h5>{item.snippet.title}</h5>
                  <iframe className="video" src={`https://www.youtube.com/embed/${item.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
              </div>
            );
          })}
      </section>
    );
  }


}

export default YouTube;
