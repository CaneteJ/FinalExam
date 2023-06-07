import React from 'react';

function landingPage() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>Already have an account?</p>
      <a href="/login">Login</a>
      <br />
      <p>Don't have an account yet?</p>
      <button onClick={() => console.log('Get started clicked')}>Get Started</button>
    </div>
  );
}

export default landingPage;