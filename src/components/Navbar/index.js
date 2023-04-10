import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo,
    MobileIcon, NavMenu, NavItem, NavLinks,
    NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">david</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="coffee">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="mywork">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="coolthings">Cool Things</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In!</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar