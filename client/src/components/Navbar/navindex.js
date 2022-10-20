import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo
} from './NavbarElements';
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>
            <img src={logo} alt="logo" width="130" height="130" /> 
         </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Cuisine' activeStyle>
            Cuisine
          </NavLink>
          <NavLink to='/Dhabas' activeStyle>
            Dhabas
          </NavLink>
          <NavLink to='/About Us' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/Contact Us' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/register'>Register</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;