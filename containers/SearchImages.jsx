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
    // this.fetchImages(this.state.searchTerm);
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


    // const { data, searchTerm } = this.state;
    // const url = `${ROOT_URL}&q=${city}&days=5`;
    // const request = axios.get(url);
    // var myRequest = new Request('flowers.jpg');

    const API_KEY_IMAGES = '5bm2bb5nwpzgxk7puhm4w9vq';
    const ROOT_URL_IMAGES = `https://api.gettyimages.com/v3/search/images`;
    const myInit = {
      method: 'GET',
      headers: {'Api-Key': API_KEY_IMAGES},
      mode: 'cors',
      cache: 'default',
    };
    const request = new Request(`${ROOT_URL_IMAGES}?phrase=${imageQuery}`, myInit);
    
    // let fetchImagesHeaders = {'Api-Key': API_KEY_IMAGES};
    // console.log(fetchImagesHeaders, '...')
    // let myHeaders = new Headers();
    // myHeaders.append('Api-Key', API_KEY_IMAGES);
    // console.log(myHeaders, 'myHeaders')
    

    console.log(request);
    // fetch(request, { myInit })
    fetch(request)
      .then((response) => {
        console.log(response);
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

        // <pre><code>{JSON.stringify(this.state.data[0], null, 4)}</code></pre>

// {
//             // "id": "98844671",
//             // "asset_family": "creative",
//             // "caption": null,
//             // "collection_code": "DV",
//             // "collection_id": 13,
//             // "collection_name": "DigitalVision",
//             "display_sizes": [
//                 {
//                     "is_watermarked": false,
//                     "name": "thumb",
//                     "uri": "https://media.gettyimages.com/photos/side-view-of-woman-with-metallic-make-up-picture-id98844671?b=1&k=6&m=98844671&s=170x170&h=F5H4A2ag0zQPpMDKEut6c5bGdjX805ScTeZwVyqFoB0="
//                 }
//             ],
//             // "license_model": "royaltyfree",
//             // "max_dimensions": {
//             //     "height": 4278,
//             //     "width": 5700
//             // },
//             "title": "Side view of woman with metallic make up"
//         }


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
          <div className="image-item" key={item.id} >
          
            <img src={item.display_sizes[0].uri} className="img-responsive center-block"  alt={item.title} />
          </div>
          ),
        )}
        
      </section>
    );
  }
}

export default SearchImages;

        // <Image
          // style={{width: 50, height: 50}}
          // source={{uri: item.display_sizes.uri}}
        // />
 //       <Image
 //          style={{width: 50, height: 50}}
 //          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
 //        />

 // {`${item.display_sizes.uri}`} = undefined
 // {`{item.display_sizes.uri}`} = {item.display_sizes.uri}
 // {item.display_sizes.uri} = no image attr tag

