import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const lightPurple = '#D5CEE9'
const darkPurple = '#330C49'
const offWhite = '#F5F5E9'
const skyBlue = '#AEF'

export const Nav = styled.nav`
  /* background-color: rgba(0, 0, 0, 1); */
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;

  background-color: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 70px;
  margin-top: -70px;
  font-size: 1rem;
  z-index: 10;
  transition: 0.4s all ease;


  /* @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  } */
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 36px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? lightPurple : '#fff')};
  justify-self: flex-start;
  display: flex;
  align-items: center;

  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -4px;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.4rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? lightPurple : '#fff')};
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 70px;
`

export const NavLinks = styled(LinkS)`
  color: ${({ scrollNav }) => (scrollNav ? lightPurple : '#fff')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  font-size: 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    /* border-bottom: 2px solid turquoise; */
    color: ${skyBlue}
  }
`

export const NavBtn = styled.nav`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  background: ${({ scrollNav }) => (scrollNav ? lightPurple : 'transparent')};
  color: ${({ scrollNav }) => (scrollNav ? darkPurple : '#fff')};

  border-radius: 50px;
  white-space: nowrap;
  padding: 8px 14px;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  justify-content: center;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${lightPurple};
    background: ${darkPurple};
    color: ${({ scrollNav }) => (scrollNav ? darkPurple : lightPurple)};
    background: ${({ scrollNav }) => (scrollNav ? offWhite : darkPurple)};
  }
`