const React = require('react');
const { Link } = require('react-router');
const { connect } = require('react-redux');

const Header = React.createClass ({
  render () {
    return (
      <nav class="navbar navbar-inverse">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link to="/" class="navbar-brand">Omnichanne1</Link>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li class="active"><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="mailto:mcqnyc@gmail.com">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = connector(Header);
