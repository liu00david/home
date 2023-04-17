import styled from 'styled-components'
// import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: right;
    align-items: top;
    position: relative;

    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
            linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%),
            linear-gradient(0deg, rgba(0,0,0,1) 0%, transparent 50%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: -1;
`

export const HeroContent = styled.div`
    position: relative;
    align-items: right;
    margin-right: 18vw;
    margin-top: 33vh;
    color: #fff;
    z-index: 3;
`

export const HeroH1 = styled.h1`
    text-align: right;

    font-size: 54px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 48px;
    }
`

export const HeroP = styled.p`
    font-size: 22px;
    text-align: right;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`

// export const HeroBtnWrapper = styled.div`
//     margin-top: 32px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `

// export const ArrowForward = styled(MdArrowForward)`
//     margin-left: 8px;
//     font-size: 20px;
// `

// export const ArrowRight = styled(MdKeyboardArrowRight)`
//     margin-left: 8px;
//     font-size: 20px;
// `

export const BarIcon = styled.div`
  position: relative;
  right: 0px;
  width: 60px;
  height: 5px;
  margin: 12px 0 0 auto;
  background-color: white;
  border-radius: 5px;
`

export const HeroPhaser = styled.div`
    background: linear-gradient(to bottom, #000000, transparent), #181825;
    height: 40px;
`

export const CircleFollow = styled.div`
  position: fixed;
  top: ${props => props.top}px;
  right: 1%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  opacity: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;