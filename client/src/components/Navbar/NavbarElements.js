import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Images/logo.png";


export const NavP = styled.p`
background: transparent;
color: white;
margin-top: 40px;
margin-left: 280px;
font-size: 20px

`;
export const NavLogo = styled.nav`
  background-image: url(${logo});
  margin-top: -15px;

  @media screen and (min-width: 480px) {
    body {
      background-image: url(${logo});
      align-content: left;
      vertical-align: top;
    }
  }
`;

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  margin-left: -180px;
  justify-content: flex-start;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-left: 28px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
   
  &.active {
    color: #ff5200;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fee2b3;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -35px;
  margin-left: 230px;
  width: 100vw;
  justify-content: center;
  white-space: nowrap;
  margin-top:90px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -220px;
  margin-top:90px;
  justify-content: flex-end;
  width: 100vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  background: #ff5200;
  border-radius: 30px;
  padding: 10px 22px;
  color: #fff;
  align-item: left;
  justify-content: flex-end;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fee2b3;
    color: #000;
  }
`;