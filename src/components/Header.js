import React from 'react';
import Form from './Form';
import Nav from './Nav';

const Header = (props) => {
  return (
    <div className='header'>
      <Form onSearch={props.search} />
      <Nav />
    </div>
  );
};

export default Header;
