import React from 'react'
import { SidebarContainer, Icon, CloseIcon,
    SidebarWrapper, SidebarMenu, SidebarLink,
    SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
    <div>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>About me</SidebarLink>
            <SidebarLink to="coffee" onClick={toggle}>Coffee</SidebarLink>
            <SidebarLink to="mywork" onClick={toggle}>My Work</SidebarLink>
            <SidebarLink to="coolthings" onClick={toggle}>Cool Things</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
    </>
  )
}

export default Sidebar
