import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
  FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/signin">About us</FooterLink>
            <FooterLink to="/signin">How it works</FooterLink>
            <FooterLink to="/signin">Testimonials</FooterLink>
            <FooterLink to="/signin">Careers</FooterLink>
            <FooterLink to="/signin">Other</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/signin">About us</FooterLink>
            <FooterLink to="/signin">How it worksasdf</FooterLink>
            <FooterLink to="/signin">Testimonials</FooterLink>
            <FooterLink to="/signin">Careers</FooterLink>
            <FooterLink to="/signin">Other</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/signin">About us</FooterLink>
            <FooterLink to="/signin">How it works</FooterLink>
            <FooterLink to="/signin">Testimonials on myself</FooterLink>
            <FooterLink to="/signin">Careers</FooterLink>
            <FooterLink to="/signin">Other</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
            <FooterLinkTitle>Socials</FooterLinkTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer