import styled from 'styled-components'

const lightPurple = '#D5CEE9'
const darkPurple = '#330C49'
const offWhite = '#F5F5E9'


export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#CDD6DA' : '#181825')};
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 11vw;

  @media screen and (max-width: 768px) {
    height: 110vh;
  }

  @media screen and (max-height: 650px) {
    height: 150vh;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;

  /* @media screen and (max-width: 768px) {
    padding: 5vh 3vw;
  } */
`

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  grid-template-columns: ${({imgStart}) => (imgStart ? '1.5fr 2fr' : '2fr 1.5fr')};

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`

export const Column1 = styled.div`
  padding: 0 28px;
  grid-area: col1;
`

export const Column2 = styled.div`
  padding: 0 28px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  position: relative;
  margin-left: auto;
  max-width: 600px;
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
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
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
  max-width: 380px;

  @media screen and (max-width: 768px) {
    max-width: 350px;
    padding-top: 50px;
  }
`

export const Img = styled.img`
  width: 100%;
  border-radius: 50px;
  text-align: right;

  @media screen and (max-width: 768px) {
    width: 75%;
  }
`

