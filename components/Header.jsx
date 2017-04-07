import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" id="hamburger">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Omnichanne1</Link>
          </div>

          
          <div className="navbar-collapse collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="mailto:mcqnyc@gmail.com">Contact</a></li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;


