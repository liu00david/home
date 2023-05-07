import styled from "styled-components";

const lightBkg = '#CDD6DA';

export const MainContainer = styled.div`
  color: #fff;
  background: ${lightBkg};
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 11vw;

  @media screen and (max-width: 768px) {
    height: 110vh;
  }

  @media screen and (max-height: 900px) {
    height: 130vh;
  }

  @media screen and (max-height: 600px) {
    height: 150vh;
  }
`

export const MainWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
`