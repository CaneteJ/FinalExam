import React from 'react';

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/getStarted">S.P Job Finder</a>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/Hompage">Home</a>
            <a className="nav-item nav-link" href="/Login">Login</a>
            <a className="nav-item nav-link" href="/Registration">Registration</a>
            <a className="nav-item nav-link" href="/About">About Us</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;