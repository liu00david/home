import React, { useState} from 'react'
import Video from '../../videos/background.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(true)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                david's site</HeroH1>
            <HeroP>
                this is a work in progress :D
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    continue {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

// {hover ? <ArrowForward /> : <ArrowRight />}

export default HeroSection