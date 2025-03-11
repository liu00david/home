import React from 'react'
import { FooterContainer, FooterWrap,
  FooterLinkItems, FooterLinkTitle, FooterLink, ImgWrap, Img } from './FooterElements'
import Runway from '../../images/runway.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkItems>
          <FooterLinkTitle>Contact</FooterLinkTitle>
          <FooterLink onClick={() => window.location.href = 'mailto:liudavid@uchicago.edu'}>Email</FooterLink>
          <FooterLink to={"https://www.linkedin.com/in/liu00david/"}>Linkedin</FooterLink>
          <FooterLink to={"https://github.com/liu00david"}>Github</FooterLink>
          <FooterLink to={"https://liu00david.github.io/infocard/"}>My Infocard</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
          <FooterLinkTitle>Quick links</FooterLinkTitle>
          <FooterLink to={"https://drive.google.com/file/d/1PaA80r_pJBNGWoOXK0hzuLdIbO9dMTcA/preview"}>Resume</FooterLink>
          <FooterLink to={"https://en.wikipedia.org/wiki/Yahoo"}>Yahoo</FooterLink>
          <FooterLink to={"https://en.wikipedia.org/wiki/Coinbase"}>Coinbase</FooterLink>
          <FooterLink to={"https://en.wikipedia.org/wiki/University_of_Chicago"}>University of Chicago</FooterLink>
        </FooterLinkItems>
      </FooterWrap>
      <ImgWrap>
        <Img src={Runway} alt={"Runway"}/>
      </ImgWrap>
    </FooterContainer>
  )
}

export default Footer