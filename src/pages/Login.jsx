import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Submit the form to your backend server
  };
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          {/* Register */}
          <div className="card">
            <div className="card-body">
              {/* Logo */}
              <div className="app-brand justify-content-center">
                <a href="/home" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo"></span>
                  <span className="app-brand-text demo text-body fw-bolder">
                    Elise
                  </span>
                </a>
              </div>
              {/* /Logo */}
              <h4 className="mb-2">Welcome to Elise Admin! 👋</h4>
              <p className="mb-4">
                Please sign-in to your account and start the adventure
              </p>

              <form
                id="formAuthentication"
                className="mb-3"
                action="/home"
                method="POST"
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <a href="/changePassword">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide"></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label className="form-check-label" htmlFor="remember-me">
                      {' '}
                      Remember Me{' '}
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-grid w-100"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p class="text-center">
                <span>New on our platform?</span>
                <a href="/Register">
                  <span>Create an account</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
