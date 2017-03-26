import React from 'react';
import { Link } from 'react-router';

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
              <li className="active"><Link to="#"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
              <li><Link to="#">Signup</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="mailto:mcqnyc@gmail.com">Contact</Link></li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;


