import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.5rem'
    }}>
      <h1>404</h1>
      <p>Page Not Found!</p>
      <Link
        className="btn dark-btn btn-space"
        to='/'
      >
        Go Back Home
      </Link>
    </div >
  );
}

export default NotFound;