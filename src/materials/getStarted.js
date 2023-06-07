import React from 'react';
import { Link } from 'react-router-dom';

const containerStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
};

const headingStyles = {
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center',
};

const paragraphStyles = {
  fontSize: '18px',
  marginBottom: '10px',
  textAlign: 'center',
};

const buttonStyles = {
  display: 'block',
  margin: '20px auto',
  padding: '10px 20px',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: '#4CAF50',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  textDecoration: 'none',
};

function LandingPage() {
  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>S.P Job Finder</h1>
      <p style={paragraphStyles}>Already have an account?</p>
      <div style={{ textAlign: 'center' }}>
        <Link to="/login" style={buttonStyles}>Login</Link>
      </div>
      <p style={paragraphStyles}>Don't have an account yet?</p>
      <div style={{ textAlign: 'center' }}>
        <Link to="/Registration" style={buttonStyles}>
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;