import React, { useState, useRef } from "react";
import { useSpring, animated } from '@react-spring/web'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,
    TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText,
    headline, darkText, description, buttonLabel, img, alt, dark, dark2,
    primary, linkRef, idwrapper}) => {

  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const fade = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0%)' : 'translateY(10%)',
    config: { duration: 1250 },
  });

  const handleScroll = () => {
    if (!ref.current) { return; }
    const { top, bottom } = ref.current.getBoundingClientRect();
    const isVisible = top < window.innerHeight && bottom >= 0;
    setIsVisible(isVisible);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <section>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper id={idwrapper} ref={ref}>
        <animated.div style={{ ...fade}}>
          <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
            <TopLine lightText={lightText}>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
            <BtnWrap>
              <Button to={linkRef} primary={primary ? 1 : 0} dark={dark ? 1 : 0}
                smooth={true} duration={500} spy={true} exact="true" dark2={dark2 ? 1 : 0} target="_blank">
                {buttonLabel}
              </Button>
            </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
            </InfoRow>
        </animated.div>
        </InfoWrapper>
      </InfoContainer>
    </section>
  )
}

export default InfoSection