import './_navbar.scss';
import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='title'>sunnyside</div>
      <nav>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
} 

export default Navbar;