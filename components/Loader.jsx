import React from 'react';
import Loading from 'react-loading';

const Loader = React.createClass({
  render: function() {
    return (
      <div className="cylon">
        <Loading type='cylon' color='MediumVioletRed' />
      </div>
    );
  }
});

export default Loader;