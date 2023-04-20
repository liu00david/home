import React, { useState, useEffect } from "react";
import Video from '../../videos/background.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, BarIcon,
    HeroPhaser, GuideFeature} from './HeroElements'
import { GiCommercialAirplane } from "react-icons/gi";

const HeroSection = () => {
    useEffect(() => {
        window.addEventListener("scroll", function(){
            parallax();
        });
        return () => { window.removeEventListener("scroll", function(){ parallax(); }); };
    }, []);

    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;
    const [guideFeatureTop, setGuideFeatureTop] = useState(40);
    const [guideFeatureLeft, setGuideFeatureLeft] = useState(Math.cos((scrollPosition+200)/(screenHeight/2.5))*45 + 50);
    const [guideFeatureRotation, setGuideFeatureRotation] = useState(Math.sin((scrollPosition+200)/(screenHeight/2.5))*80 + 135);
    const [guideFeatureSize, setGuideFeatureSize] = useState(2);
    const [guideFeatureOpacity, setGuideFeatureOpacity] = useState(100);

    function parallax() {
        var herocontent = document.getElementById("herocontent");
        if (herocontent) {
            // Update opacity and ypos of hero content
            var herobar = document.getElementById("herobar");
            var yPos = Math.max(0 - window.pageYOffset/20, -55);
            herocontent.style.bottom = 0 + yPos + "%";
            var opacity = 1 - window.pageYOffset/500;
            herocontent.style.color = "rgba(255, 255, 255, " + opacity + ")";
            herobar.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";

            // Update ypos of GuideFeature
            const scrollPosition = window.scrollY;
            const screenHeight = window.innerHeight;
            const totalPageHeight = screenHeight * 4.2;
            const guideFeatureYPos = Math.max(40, (scrollPosition/totalPageHeight)*100);
            const guideFeatureXPos = Math.cos((scrollPosition+200)/(screenHeight/2.5))*45 + 50;
            const guideFeatureRotation = Math.sin((scrollPosition+200)/(screenHeight/2.5))*80 + 135;
            const guideFeatureSize = Math.max(2.0, 5 - (((scrollPosition - 350) ** 2)/40000) )
            const guideFeatureOpacity = Math.max(60, 100 - (scrollPosition/screenHeight)*100)

            setGuideFeatureTop(guideFeatureYPos);
            setGuideFeatureLeft(guideFeatureXPos);
            setGuideFeatureRotation(guideFeatureRotation);
            setGuideFeatureSize(guideFeatureSize);
            setGuideFeatureOpacity(guideFeatureOpacity);
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
    <GuideFeature top={guideFeatureTop} rotate={guideFeatureRotation}
        size={guideFeatureSize} left={guideFeatureLeft}
        opacity={guideFeatureOpacity}>
        <GiCommercialAirplane/>
    </GuideFeature>
    <HeroPhaser />
    </>
  )
}

export default HeroSection