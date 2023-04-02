import React, {useState} from 'react'
import Video from '../../videos/background.mov'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mov' />
        </HeroBg>
        <HeroContent>
            <HeroH1>
                My H1 header for my page, hero </HeroH1>
            <HeroP>
                My hero paragraph.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight
                    />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection