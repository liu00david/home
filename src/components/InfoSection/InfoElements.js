import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#bfc5c5' : '#000')};
  padding: 0 50px;
  height: 100vh;
  display: flex;
  align-items: center;
  /* margin-top: -80px; */

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
  margin-top: 1vh;
  padding: 0px 36px;

  @media screen and (max-width: 768px) {
    padding: 5vh 5vw;
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
`

export const TopLine = styled.p`
  color: ${({lightText}) => (lightText ? '#CBC3E3' : "#5c008d")};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8f8' : "#010616")};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? "#010606" : '#fff')};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 60vh;
  max-height: 55vh;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  @media screen and (max-width: 768px) {
    max-height: 18vh;
    max-width: 32vh;
    margin-top: 6vh;
  }
`

export const Img = styled.img`
  width: 100%;
`

