import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
        <l className='l'>
          <Link to='/'>Home</Link>
        </l>
        <l  className='l'>
          <Link to='/AdminPage'>Admin Page</Link>
        </l>
        <l  className='l'>
          <Link to='/UserPage'>User Page</Link>
        </l>
      </ul>
    </nav>
  );
};

export default Navbar;
