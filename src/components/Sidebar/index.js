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
            <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="interests" onClick={toggle}>Interests</SidebarLink>
            <SidebarLink to="purpose" onClick={toggle}>Purpose</SidebarLink>
            <SidebarLink to="showcase" onClick={toggle}>Showcase</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">TBD</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
    </>
  )
}

export default Sidebar
