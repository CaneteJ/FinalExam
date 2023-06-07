import React from 'react';
import axios from 'axios';


class Registration extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignUp = async (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;

    try {
      const response = await axios.post('http://localhost:8000/signup', {
        name,
        email,
        password,
      });

      if (response.data === 'exist') {
        alert('Email already exists.');
      } else if (response.data === 'notexist') {
        alert('Sign up successful!');
      } else {
        alert('Sign up failed.');
      }
    } catch (error) {
      console.error('An error occurred during sign up:', error);
    }
  };

  render() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/5d3a161fab57400001d7bc50/1566961488699-3NGTBDMS69OH5X9I11AE/Sabo.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      height: '100vh',
    };
    const headingStyle = {
      fontSize: '3rem',
      marginBottom: '2rem',
      color: '#FFFFFF',
      fontWeight: 'bold',
    };

    const formContainerStyle = {
      backgroundColor: '#f5f5f5',
      padding: '2rem',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      background: 'rgba(248, 248, 248, 0.8)',
    };

    const inputStyle = {
      marginBottom: '1rem',
      padding: '0.5rem',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '3px',
      width: '100%',
    };

    const buttonStyle = {
      backgroundColor: '#4caf50',
      color: '#fff',
      border: 'none',
      padding: '0.75rem',
      fontSize: '1rem',
      borderRadius: '3px',
      cursor: 'pointer',
    };

    return (
    
      <div style={containerStyle}>
        <h1 style={headingStyle}>Become one with S.P S.P Job Finder</h1>
        <div style={formContainerStyle}>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSignUp}>
            <input
              style={inputStyle}
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              style={inputStyle}
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              style={inputStyle}
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <button style={buttonStyle} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
