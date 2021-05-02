import React from 'react';
import logo from '../img/logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' />
      <div className='navSections'>
        <NavLink to='/' activeClassName='nav_active' exact>
          <span className='navSections_hola'>Hola!</span>
        </NavLink>
        <NavLink to='/resume/habilities' activeClassName='nav_active'>
          <span className='navSections_resume'>Resumen</span>
        </NavLink>
        <NavLink to='/porfolio' activeClassName='nav_active_btn'>
          <button className='navSections_porfolio'>PORFOLIO</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
