import styled from 'styled-components'

const lightPurple = '#D5CEE9'
const darkPurple = '#330C49'
const offWhite = '#F5F5E9'


export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#CDD6DA' : '#181825')};
  padding: 0px 50px;
  height: 100vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 110vh;
  }

  /* @media screen and (max-height: 500px) {
    height: 130vh;
  } */
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 36px;

  @media screen and (max-width: 768px) {
    padding: 5vh 3vw;
  }
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  padding: 0 15px;
  margin-right: 0px;
  grid-area: col1;
`

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 800px;
  padding-bottom: 10px;
  padding-left: 16px;
`

export const TopLine = styled.p`
  color: ${({lightText}) => (lightText ? lightPurple : darkPurple)};
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? offWhite : "#000")};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.16px;
  color: ${({darkText}) => (darkText ? "#000" : offWhite)};
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
  }
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 42vh;
  /* max-height: 55vh; */
  height: 100%;
  padding-left: 20px;
  margin: auto;
  @media screen and (max-width: 768px) {
    /* max-height: 18vh; */
    margin-right: 4vw;
    margin-top: 20px;
  }
`

export const Img = styled.img`
  width: 110%;
  border-radius: 50px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 75%;
  }
`

