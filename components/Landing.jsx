import React from 'react';
import News from './News';
import YouTube from './YouTube';
import SearchBar from '../containers/SearchBar';
import SearchImages from '../containers/SearchImages';

const Landing = () => (
  <div>
    <div className="navbar-spacer" />
    <div className="row">

      <section className="span-3-of-3">
        <SearchImages />
      </section>

      <section className="span-3-of-3">
        <SearchBar />
        <News />
      </section>

      <section className="span-3-of-3">
        <YouTube />
      </section>

    </div>
  </div>
);

export default Landing;
