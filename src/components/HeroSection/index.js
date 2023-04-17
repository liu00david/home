import React, { useState, useEffect } from "react";
import Video from '../../videos/background.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, BarIcon, HeroPhaser, CircleFollow} from './HeroElements'

const HeroSection = () => {
    const [circleTop, setCircleTop] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", function(){
            parallax();
        });
        return () => { window.removeEventListener("scroll", function(){ parallax(); }); };
    }, []);

    function parallax() {
        var herocontent = document.getElementById("herocontent");
        if (herocontent) {
            var herobar = document.getElementById("herobar");
            var yPos = Math.max(0 - window.pageYOffset/9, -55);
            herocontent.style.bottom = 0 + yPos + "%";
            var opacity = 1 - window.pageYOffset/300;
            herocontent.style.color = "rgba(255, 255, 255, " + opacity + ")";
            herobar.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";

            const scrollPosition = window.scrollY;
            const screenHeight = window.innerHeight;
            const circlePosition = (scrollPosition / screenHeight) * 100;
            setCircleTop(circlePosition);
        }
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
        <BarIcon id="herobar"/>
        </HeroContent>
    </HeroContainer>
    <HeroPhaser />
    <CircleFollow top={circleTop}> hi </CircleFollow>
    </>
  )
}

export default HeroSection