import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import custom CSS styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/', {
        email,
        password,
      });

      if (response.data === 'exist') {
        console.log('Login successful!');
        setLoginError('');
      } else if (response.data === 'notexist') {
        setLoginError('Invalid email or password.');
      } else {
        setLoginError('Login failed.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setLoginError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h2>Login</h2>
        </div>
        {loginError && <p className="error-message">{loginError}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
        <div className="login-footer">
          <p>
            Not a member? <a href="#register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;