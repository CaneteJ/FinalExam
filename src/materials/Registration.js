import React from 'react';

function Registration() {
  const containerStyle = {
    maxWidth: '400px',
    margin: 'auto',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  };

  const signinStyle = {
    textAlign: 'center',
  };

  return (
    <div>
      <form action="action_page.php">
        <div style={containerStyle}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required style={inputStyle} />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="psw" style={labelStyle}><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required style={inputStyle} />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="psw-repeat" style={labelStyle}><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required style={inputStyle} />
          </div>
          <hr />

          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" className="registerbtn" style={buttonStyle}>Register</button>

          <div style={signinStyle} className="container">
            <p>Already have an account? <a href="Login">Sign in</a>.</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;