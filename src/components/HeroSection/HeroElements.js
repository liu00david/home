import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #222;
    display: flex;
    justify-content: right;
    align-items: top;
    padding: 0 0px;
    height: 100vh;
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
    background: #232a34;
    z-index: -1;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: right;
    /* padding: 70px; */
    margin-right: 18vw;
    margin-top: 33vh;
    /* padding-bottom: 30vh; */
    /* padding-left: 30vw; */
    /* background-color: rgba(137, 150, 155, 0.5); */
    color: #fff;
`

export const HeroH1 = styled.h1`
    /* color: #fff; */
    font-size: 54px;
    text-align: right;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 48px;
    }

    /* @media screen and (max-width: 480px) {
        font-size: 32px;
    } */
`

export const HeroP = styled.p`
    /* margin-top: 46px; */
    /* color: #fff; */
    font-size: 22px;
    text-align: right;
    max-width: 600px;
    /* padding: 10px; */

    @media screen and (max-width: 768px) {
        /* margin-top: 28px; */
        font-size: 18px;
    }

    /* @media screen and (max-width: 480px) {
        font-size: 16px;
    } */
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const BarIcon = styled.div`
    text-align: right;
    display: block;
    font-size: 3rem;
    /* color: #fff; */
    margin-top: -5px;
    margin-right: -3px;
`

export const HeroPhaser = styled.div`
    background: linear-gradient(to bottom, #000000, transparent), #181825;
    height: 40px;
`