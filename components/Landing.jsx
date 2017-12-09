import React from 'react';
import YouTube from './YouTube';
import SearchBar from '../containers/SearchBar';
import News from './News';
// import SearchImages from '../containers/SearchImages';

const Landing = () => (
  <div>
    <div className="row">

      <section className="span-1-of-3">
        <YouTube />
      </section>

      <section className="span-2-of-3">
        <SearchBar />
        <News />
      </section>

    </div>
  </div>
);

export default Landing;
