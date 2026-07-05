import React from 'react';
import Topbar from './Topbar';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <div>
      <div>
        <Topbar/>
      </div>

      <div>
        <NavMenu/>
      </div>
    </div>
  );
};

export default Navbar;