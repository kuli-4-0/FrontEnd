import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and confirm password don't match");
      return;
    }

    const data = {
      name: username,
      email,
      password,
      confirmPassword,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        data
      );
      console.log(response.data);
      navigate('/login?toastify=true');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          {/* <!-- Register Card --> */}
          <div className="card">
            <div className="card-body">
              {/* <!-- Logo --> */}
              <div className="app-brand justify-content-center">
                <a href="#" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo"></span>
                  <span className="app-brand-text demo text-body fw-bolder">
                    Elise
                  </span>
                </a>
              </div>
              {/* <!-- /Logo --> */}
              <h4 className="mb-2">Adventure starts here 🚀</h4>
              <p className="mb-4">Make your app management easy and fun!</p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="terms">
                  <Form.Check
                    type="checkbox"
                    label="I agree to privacy policy & terms"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Sign up
                </Button>
              </Form>

              <p className="text-center">
                <span>Already have an account?</span>
                <a href="/Login">
                  <span>Sign in instead</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
