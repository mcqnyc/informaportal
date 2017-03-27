import React from 'react';
import { render } from 'react-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import DataViewport from '../components/DataViewport.jsx';
import VideoViewport from '../components/VideoViewport.jsx';
// import '../public/css/reset.css';
// import '../public/css/style.css';

const App = React.createClass({
  render () {
    return (
      <div className="app">

        <Header />

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <VideoViewport />
            </div>
            <div className="col-sm-4">
              <DataViewport />
            </div>
            <div className="col-sm-4">
              <DataViewport />
            </div>
          </div>
        </div>


        <Footer />

      </div>
    );
  }
});

render(<App />, document.getElementById('app'));
