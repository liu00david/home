import styled from 'styled-components'
import {Link} from 'react-router-dom'

const skyBlue = '#AEF'
const darkDarkBkg = '#181825';

export const FooterContainer = styled.footer`
  background-color: ${darkDarkBkg};
`

export const FooterWrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #fff;
  height: 160px;
`

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  font-weight: 600;
  margin: 18px 0;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${skyBlue};
    transition: 0.3s ease-out;
  };
`

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 440px;
  color: white;
  padding-bottom: 8vh;
  padding-left: 20px;
  padding-right: 20px;

  /* @media screen and (max-width: 768px) {
    padding-bottom: 11%;
  } */
`

export const Img = styled.img`
  color: white;
  width: 100%;
`