import React from 'react';
import News from './News.jsx';
import YouTube from './YouTube.jsx';
import SearchBar from '../containers/SearchBar.jsx';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar-spacer"></div>
        <div className="row">

          <section className="span-3-of-3">
            <News />
            <SearchBar />
          </section>

          <section className="span-3-of-3">
          </section>

          <section className="span-3-of-3">
            <YouTube />
          </section>

        </div>
      </div>
    );
  }
}

export default Landing;
