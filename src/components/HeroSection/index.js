import React, { useState, useEffect } from "react";
import Video from '../../videos/background.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, BarIcon,
    HeroPhaser, GuideFeature, GuideFeature2} from './HeroElements'
import { GiCommercialAirplane } from "react-icons/gi";

const HeroSection = () => {
    useEffect(() => {
        window.addEventListener("scroll", function(){
            parallax();
        });
        return () => { window.removeEventListener("scroll", function(){ parallax(); }); };
    }, []);

    const [guideFeatureTop, setGuideFeatureTop] = useState(44);
    const [guideFeatureLeft, setGuideFeatureLeft] = useState(42 + 48);
    const [guideFeatureRotation, setGuideFeatureRotation] = useState(135);
    const [guideFeatureSize, setGuideFeatureSize] = useState(3.5);
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
            // Change this for how many pages there are.
            const totalPageHeight = screenHeight * 4;
            const guideFeatureYPos = Math.min(88,Math.max(44, (scrollPosition/totalPageHeight)*100));
            const guideFeatureXPos = Math.cos((scrollPosition)/(screenHeight/3.2))*42 + 48;
            const guideFeatureRotation = Math.sin((scrollPosition)/(screenHeight/3.2))*80 + 135;
            const guideFeatureSize = Math.max(3.5, ( (11*scrollPosition)/(0.3*screenHeight) - (5.5*(scrollPosition**2))/(0.3*screenHeight)**2 + 2));
            const guideFeatureOpacity = Math.max(70, 150 - (scrollPosition/screenHeight)*100);

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
    <GuideFeature2 top={31} rotate={100} opacity={20} left={89}>
        <GiCommercialAirplane/>
    </GuideFeature2>
    <GuideFeature2 top={38} rotate={135} opacity={50} left={90}>
        <GiCommercialAirplane/>
    </GuideFeature2>
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