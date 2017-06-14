import React from 'react';
import News from './News.jsx';
import YouTube from './YouTube.jsx';
import SearchBar from '../containers/SearchBar.jsx';

class Landing extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="navbar-spacer"></div>
        
        <div className="row">
          
          <section className="col-1">
            <YouTube />
          </section>
          
        
          <section className="col-1">
            <SearchBar />
          </section>

        </div>
      </div>
    );
  }
}

export default Landing;