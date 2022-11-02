import React from 'react';
import {useEffect, useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
  NavP
} from './NavbarElements';
import logo from '../../Images/logo.png';

const Navbar = () => {
  

  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUsername] = useState(false);

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const name = localStorage.getItem('name');


    if(token != null && role == 'customer'){
      setLoginStatus(true);
      setUsername(name);
    }
  }, []);

  function logOut(){
    localStorage.clear();
    window.location.reload();
  }
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
        {!loginStatus? 
            <>
                  <NavBtn>
                  <NavBtnLink to='/login'>Log In</NavBtnLink>
                </NavBtn>
                <NavBtn>
                  <NavBtnLink to='/register'>Register</NavBtnLink>
                </NavBtn>
            </>
         : <>
         <NavP>
<p>Hello,{username}</p>
      </NavP>
         <NavBtn>
                  <NavBtnLink onClick={logOut} >Logout</NavBtnLink>
                </NavBtn>
         </>}

      </Nav>
    </>
  );
};

export default Navbar;