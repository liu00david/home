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
          <FooterLink onClick={() => window.location.href = 'mailto:liudavid@uchicago.edu'}>Email</FooterLink>
          <FooterLink a href="https://www.linkedin.com/in/liu00david/">Linkedin</FooterLink>
          <FooterLink a href="https://github.com/liu00david">Github</FooterLink>
          <FooterLink to="/signin">Online (TBD)</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
          <FooterLinkTitle>Quick Navigation</FooterLinkTitle>
          <FooterLink to="/signin">Code Projects (TBD)</FooterLink>
          <FooterLink to="/signin">Personal Sketchpad (TBD)</FooterLink>
          <FooterLink to="/signin">Media Gallery (TBD)</FooterLink>
          <FooterLink to="/signin">Blog (TBD)</FooterLink>
        </FooterLinkItems>
      </FooterWrap>
      <ImgWrap>
        <Img src={Runway} alt={"Runway"}/>
      </ImgWrap>
    </FooterContainer>
  )
}

export default Footer