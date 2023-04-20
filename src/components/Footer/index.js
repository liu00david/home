import React from 'react'
import { FooterContainer, FooterWrap,
  FooterLinkItems, FooterLinkTitle, FooterLink, ImgWrap, Img } from './FooterElements'
import Runway from '../../images/runway.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Me</FooterLinkTitle>
          <FooterLink to="/signin">Email</FooterLink>
          <FooterLink to="/signin">Linkedin</FooterLink>
          <FooterLink to="/signin">Github</FooterLink>
          <FooterLink to="/signin">Online</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
          <FooterLinkTitle>Quick Navigation</FooterLinkTitle>
          <FooterLink to="/signin">Code Projects</FooterLink>
          <FooterLink to="/signin">Personal Sketchpad</FooterLink>
          <FooterLink to="/signin">Visual Gallery</FooterLink>
          <FooterLink to="/signin">Blog</FooterLink>
        </FooterLinkItems>
      </FooterWrap>
      <ImgWrap>
        <Img src={Runway} alt={"Runway"}/>
      </ImgWrap>
    </FooterContainer>
  )
}

export default Footer