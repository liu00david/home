import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const darkBkg = '#181825';
const lightBkg = '#CDD6DA';
const lightPurple = '#D0C8E9'
const darkPurple = '#330C49'
const offWhite = '#F5F5E9'
const oppOffWhite = '#161615'
const offWhiteWhite = '#F1F1EA'
const darkDarkPurple = '#1E052C'

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${darkBkg};
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: 99;
  top: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  margin: 4px;
  margin-right: -4px;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(5, 50px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${offWhite};
  cursor: pointer;

  &:hover {
    color: ${lightPurple};
    transition: 0.2s ease-in-out;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${offWhite};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${darkDarkPurple};
  font-size: 1.25rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${lightPurple};
  }
`

