const React = require('react');
const { Link } = require('react-router');
const { connect } = require('react-redux');

const Footer = React.createClass ({
  render () {
    return (
      <div class="container">
        <section class="footer-nav">
          <nav class="channels">
            <h3>Channels</h3>
            <ul>
              <li><a href="#">Art&nbsp;&amp;&nbsp;Design</a></li>
              <li><a href="#">Automobiles</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Celebrity</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Food</a></li>
              <li><a href="#">Health</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Real&nbsp;Estate</a></li>
              <li><a href="#">Science</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Travel</a></li>
              <li><a href="#">TV</a></li>
            </ul>
          </nav>
        </section>
      </div>
    )
  }
});

module.exports = connector(Footer);
