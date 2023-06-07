import React from 'react';

function getStart() {
  const jobListings = [
    {
      title: 'Customer Support Representative',
      company: 'ABC Company',
      location: 'Remote',
      jobType: 'Full-time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eu ligula dignissim, sed bibendum dolor mattis.',
      applyLink: '/job/1'
    },
    {
      title: 'Marketing Specialist',
      company: 'XYZ Corporation',
      location: 'City Name',
      jobType: 'Part-time',
      description: 'Ut eu semper nisi, vel hendrerit nibh. Integer vitae ante consectetur, pellentesque turpis id, eleifend nunc.',
      applyLink: '/job/2'
    }
  ];

  const jobCardStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333333'
  };

  const applyButtonStyle = {
    backgroundColor: '#3498db',
    color: '#ffffff',
    padding: '10px 20px',
    textDecoration: 'none',
    display: 'inline-block',
    borderRadius: '4px',
    marginTop: '10px'
  };

  const pageStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    minHeight: '100vh'
  };

  const headingStyle = {
    color: '#333333',
    marginBottom: '20px'
  };

  return (
    <div style={pageStyle}>
      <h3 style={headingStyle}>Welcome to the Single Mom Job Listings!</h3>
      <p>
        Find the perfect job opportunities tailored for single moms. We understand the unique challenges you face and strive to provide job listings that offer flexibility, remote work options, and family-friendly policies.
      </p>
      <p>
        Browse through our curated list of job openings from companies that value work-life balance and support the needs of single moms. We offer a wide range of job types and industries to suit your skills and preferences.
      </p>
      <h4 style={headingStyle}>Featured Job Listings</h4>
      <div className="job-listings">
   
        {jobListings.map((job, index) => (
            
          <div className="job-card" style={jobCardStyle} key={index}>
            <h5 style={titleStyle}>{job.title}</h5>
            <p>{job.company}</p>
            <p>Location: {job.location}</p>
            <p>Job Type: {job.jobType}</p>
            <p>{job.description}</p>
            <a href="Registration" style={applyButtonStyle} className="btn-apply">Apply Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default getStart;