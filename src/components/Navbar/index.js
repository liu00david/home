import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo,
    MobileIcon, NavMenu, NavItem, NavLinks,
    NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle, ishomepage }) => {
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

  if(ishomepage) {
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
                <NavLinks to="interests" smooth={true} duration={500} spy={true} exact='true' scrollNav={scrollNav}>
                  interests</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="purpose" smooth={true} duration={500} spy={true} exact='true' scrollNav={scrollNav}>
                  purpose</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="showcase" smooth={true} duration={500} spy={true} exact='true' scrollNav={scrollNav}>
                  showcase</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink scrollNav={scrollNav} to="/signin" >what's next</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </>
    )
    } else {
      return(
      <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>liu00david</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
      )
    }
}

export default Navbar