import React from 'react'
import Video from '../../videos/background.mp4'
// import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'

const HeroSection = () => {
//   const [hover, setHover] = useState(true)

//   const onHover = () => {
//     setHover(!hover)
//   }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted playsInline={true}
            controls={false}
            src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                david</HeroH1>
            <HeroP>
                just a little bit of everything
            </HeroP>
            {/* <HeroBtnWrapper>
                <Button smooth={true} duration={500} spy={true} exact='true' to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>
                    who {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper> */}
        </HeroContent>
    </HeroContainer>
  )
}

// {hover ? <ArrowForward /> : <ArrowRight />}

export default HeroSection