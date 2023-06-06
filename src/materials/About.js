import React from 'react';

const aboutStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
  background: '#f8f8f8',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
};

const headingStyles = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#333',
};

const paragraphStyles = {
  fontSize: '16px',
  marginBottom: '10px',
  color: '#555',
};

function About() {
  return (
    <div style={aboutStyles}>
      <h2 style={headingStyles}>About Us</h2>
      <p style={paragraphStyles}>
        At Single Moms Job Assistance, our mission is to provide support and resources to single moms who are seeking employment opportunities. We understand the unique challenges faced by single mothers in the job market, and we are here to help bridge the gap and empower them to achieve financial independence.
      </p>
      <p style={paragraphStyles}>
        Our dedicated team of professionals is committed to offering a wide range of services to assist single moms in their job search. We provide resume writing assistance, interview preparation, job placement services, and access to job training programs tailored to their needs and skill sets.
      </p>
      <p style={paragraphStyles}>
        Additionally, we collaborate with local businesses and organizations to create job opportunities specifically targeted towards single moms. By partnering with employers who value diversity and understand the unique strengths single mothers bring to the workplace, we aim to create a supportive and inclusive environment for their professional growth.
      </p>
      <p style={paragraphStyles}>
        We believe that every single mom deserves the opportunity to build a successful career and provide a better future for themselves and their children. Through our comprehensive job assistance programs, we strive to make a positive impact and empower single moms to achieve their professional goals.
      </p>
    </div>
  );
}

export default About;