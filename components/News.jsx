import React from 'react';
import { Link } from 'react-router-dom';
import Time from 'react-time';
// import { Button, Pagination } from 'react-bootstrap';

class News extends React.Component {
  // constructor(props) {
  //   super(props);

    // this.handleSelect = this.handleSelect.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.convertTheTimestamp = this.convertTheTimestamp.bind(this);

  //   this.state = {
  //     data: [],
  //     isLoading: false,
  //     activePage: 1,
  //   };
  // }

  // componentDidMount() {
  //   this.handleClick();
  // }

  convertTheTimestamp(webPublicationDate) {
    return new Date(webPublicationDate);
  }

  // handleSelect(eventKey) {
  //   this.setState({ activePage: eventKey });
  // }

  render() {
    return (
      <div>
        <ul id="news-content">
          {currentItems.map(item => (
            <li key={item.id} >
              <Time value={this.convertTheTimestamp(item.webPublicationDate)} format="MMM DD,HH:mm" />:
              <Link to={item.webUrl} target="_blank"> {item.webTitle}</Link>
            </li>
          ),
          )}
        </ul>
      </div>  
    );
  }
  // handleClick() {
  //   this.setState({ isLoading: true });

  //   const myInit = {
  //     method: 'GET',
  //     mode: 'cors',
  //     cache: 'default',
  //   };

  //   fetch('https://content.guardianapis.com/search?section=fashion&order-by=newest&page-size=50&q=business&api-key=7df519db-080e-4ab3-98fe-a36d60896d5c', { myInit })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error('Network response was not ok.');
  //     })
  //     .then((response) => {
  //       this.setState({ data: response.response.results, isLoading: false });
  //     })
  //     .catch((error) => {
  //       console.error('fetch error in the News API', error);
  //     });
  // }

  // render() {
  //   const isLoading = this.state.isLoading;

  //   const { data, activePage } = this.state;

  //   // Logic for displaying paginated news items
  //   const itemsPerPage = 5;
  //   const indexOfFirstItem = (activePage - 1) * itemsPerPage;
  //   const indexOfLastItem = activePage * itemsPerPage;
  //   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  //   return (
  //     <section className="news-api">
  //       <div className="news-button-group">
  //         <h2>Fashion News</h2>
  //         <Button
  //           bsStyle="primary"
  //           disabled={isLoading}
  //           onClick={!isLoading ? this.handleClick : null}
  //         >
  //           {isLoading ? 'Loading...' : 'Get the news'}
  //         </Button>
  //       </div>
  //       <ul id="news-content">
  //         {currentItems.map(item => (
  //           <li key={item.id} >
  //             <Time value={this.convertTheTimestamp(item.webPublicationDate)} format="MMM DD,HH:mm" />:
  //             <Link to={item.webUrl} target="_blank"> {item.webTitle}</Link>
  //           </li>
  //         ),
  //         )}
  //       </ul>
  //       <Pagination
  //         prev
  //         next
  //         first
  //         last
  //         ellipsis={false}
  //         boundaryLinks
  //         items={10}
  //         maxButtons={3}
  //         activePage={this.state.activePage}
  //         onSelect={this.handleSelect}
  //       />
  //     </section>
  //   );
  // }

  }
// }

export default News;
