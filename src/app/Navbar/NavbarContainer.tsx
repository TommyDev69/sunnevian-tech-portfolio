import React from 'react'
import NavbarLogo from './NavLogo';
import NavbarContent from './NavbarContent';

function NavbarContainer() {
  return (
    <div className='flex  justify-between items-center'>
        <NavbarLogo />
        <NavbarContent />

      
    </div>
  )
}
export default NavbarContainer;
