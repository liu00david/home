import React, { useState} from 'react'
import Video from '../../videos/background.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
    ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(true)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted playsInline={true}
            controls={false}
            src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                a website</HeroH1>
            <HeroP>
                work in progress :D
            </HeroP>
            <HeroBtnWrapper>
                <Button to="coolthings" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    to fix... {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

// {hover ? <ArrowForward /> : <ArrowRight />}

export default HeroSection