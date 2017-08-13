import React from 'react';
import YouTube from './YouTube';
import SearchBar from '../containers/SearchBar';
import News from './News';
import SearchImages from '../containers/SearchImages';

const Landing = () => (
  <div>
    <div className="navbar-spacer" />
    <div className="row">

      <section className="span-3-of-3">
        <YouTube />
      </section>

      <section className="span-3-of-3">
        <SearchBar />
        <News />
      </section>

      <section className="span-3-of-3">
        <SearchImages />
      </section>

    </div>
  </div>
);

export default Landing;
