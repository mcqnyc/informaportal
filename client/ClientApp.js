import React from 'react';
import { render } from 'react-dom';
import Header from '../components/Header.jsx';
// import '../public/css/reset.css';
// import '../public/css/style.css';

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <Header />
          <h1>Omnichanne1</h1>
          <input type='text' placeholder='Search' />
          <a>or Browse All</a>
        </div>
      </div>
    );
  }
});

render(<App />, document.getElementById('app'));
