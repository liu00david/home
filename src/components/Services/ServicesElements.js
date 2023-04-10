import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0px 50px;

  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  } */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0px 20px;
  }
`

export const ServicesCard = styled.div`
  background: #e5e5f0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  height: 42vh;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  margin: 5px;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 28vh;
    width: 25vh;
  }
`

export const ServicesIcon = styled.img`
  height: 18vh;
  width: 20vh;
  padding-bottom: 1vh;

  @media screen and (max-width: 768px) {
    height: 10vh;
    width: 20vh;
  }
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  padding-bottom: 5vh;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  padding-bottom: 1vh;
  margin-top: 20px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`