import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  render () {
    return (
        <section className="auth">
          <div className="row">
            <div className="col-sm-12 col-sm-offset-3">
              <h2>Signup</h2>
              <form name="signupForm">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Signup</button>
              </form>
              <Link to="login">Already have an account? <strong>Login</strong> ...</Link>
            </div>
          </div>
        </section>
    );
  }
}

export default Signup;
