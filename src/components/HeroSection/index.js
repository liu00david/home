import React, { useEffect } from "react";
import Video from '../../videos/background.mp4'
// import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, BarIcon, HeroPhaser } from './HeroElements'

const HeroSection = () => {
//   const [hover, setHover] = useState(true)

//   const onHover = () => {
//     setHover(!hover)
//   }

    useEffect(() => {
        window.addEventListener("scroll", function(){
            parallax();
        });
        return () => { window.removeEventListener("scroll", function(){ parallax(); }); };
    }, []);

    function parallax() {
        var herocontent = document.getElementById("herocontent");
        var yPos = 0 - window.pageYOffset/7;
        herocontent.style.top = 0 + yPos + "%";
        var opacity = 1 - window.pageYOffset/100;
        herocontent.style.color = "rgba(255, 255, 255, " + opacity + ")";
    }

  return (
    <>
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted playsInline={true}
            controls={false}
            src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent id="herocontent">
            <HeroH1>
                david</HeroH1>
            <HeroP>
                here's a little bit of everything
            </HeroP>
            {/* <HeroBtnWrapper>
                <Button smooth={true} duration={500} spy={true} exact='true' to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>
                    who {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper> */}
        <BarIcon />
        </HeroContent>
    </HeroContainer>
    <HeroPhaser />
    </>
  )
}

// {hover ? <ArrowForward /> : <ArrowRight />}

export default HeroSection