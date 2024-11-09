import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Important_Post/NotFoundPage.css'; // Import the CSS file

const NotFoundPage = () => {
  return (
    <div className="not-found-container container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFoundPage;
