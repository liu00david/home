import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo,
    MobileIcon, NavMenu, NavItem, NavLinks,
    NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 70) {
      setScrollNav(true) } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)}, []
  );

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
            liu00david
            </NavLogo>
          <MobileIcon onClick={toggle} scrollNav={scrollNav}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' scrollNav={scrollNav}>
                about</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="coffee" smooth={true} duration={500} spy={true} exact='true' scrollNav={scrollNav}>
                interests</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="mywork" smooth={true} duration={500} spy={true} exact='true' scrollNav={scrollNav}>
                plans</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="coolthings" smooth={true} duration={500} spy={true} exact='true' scrollNav={scrollNav}>
                create</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink scrollNav={scrollNav} to="/signin" >what's next</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar