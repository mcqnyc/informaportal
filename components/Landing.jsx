import React from 'react';
import YouTube from './YouTube';
import Weather from '../containers/Weather';
import News from './News';
// import SearchImages from '../containers/SearchImages';
import './Landing.css';

const Landing = () => (
  <div id="landing">
    <section className="span-1-of-3">
      <YouTube />
    </section>

    <section className="span-2-of-3">
      <Weather />
      <News />
    </section>
  </div>
);

export default Landing;
