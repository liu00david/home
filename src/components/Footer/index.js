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
            <FooterLinkTitle>Contact Me</FooterLinkTitle>
            <FooterLink to="/signin">Email</FooterLink>
            <FooterLink to="/signin">Linkedin</FooterLink>
            <FooterLink to="/signin">Github</FooterLink>
            <FooterLink to="/signin">Website signature</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
            <FooterLinkTitle>Game Ideas</FooterLinkTitle>
            <FooterLink to="/signin">Idea 1</FooterLink>
            <FooterLink to="/signin">Idea 2</FooterLink>
            <FooterLink to="/signin">Idea 3</FooterLink>
            <FooterLink to="/signin">Others</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle>Blog</FooterLinkTitle>
            <FooterLink to="/signin">Latest</FooterLink>
            <FooterLink to="/signin">Random</FooterLink>
            <FooterLink to="/signin">Pinned</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
            <FooterLinkTitle>Songs of the month</FooterLinkTitle>
            <FooterLink to="/">Mirror - Porter Robinson</FooterLink>
            <FooterLink to="/">Town Called Paradise - Tiesto</FooterLink>
            <FooterLink to="/">Song 3</FooterLink>
            <FooterLink to="/">Song 4</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer