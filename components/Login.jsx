import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render () {
    return (
        <section className="auth">
          <div className="row">
            <div className="col-sm-12 col-sm-offset-3">
              <h2>Login</h2>
              <form name="loginForm">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Login</button>
              </form>
              <Link to="signup">Don't have an account? <strong>Signup</strong> ...</Link>
            </div>
          </div>
        </section>
    );
  }
}

export default Login;
