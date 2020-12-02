import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <h2>Oops! Page Not Found</h2>
      <img src='./logo192.png' alt='Company Logo' />
      <NavLink className='home' to={'/search/cats'}>
        Home
      </NavLink>
    </div>
  );
};

export default PageNotFound;
