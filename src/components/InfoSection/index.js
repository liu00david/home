import React, { useRef, useEffect, useState } from "react";
import { Button } from '../ButtonElement'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,
    TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText,
    headline, darkText, description, buttonLabel, img, alt, dark, dark2,
    primary, linkRef, idwrapper}) => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  return (
    <section>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper id={idwrapper} visible={true}>
          <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper isVisible={isVisible} ref={ref}>
            <TopLine lightText={lightText}>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
            <BtnWrap>
              <Button to={linkRef} primary={primary ? 1 : 0} dark={dark ? 1 : 0}
                smooth={true} duration={500} spy={true} exact="true"
                offset={-80} dark2={dark2 ? 1 : 0} target="_blank">
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
        </InfoWrapper>
      </InfoContainer>
    </section>
  )
}

export default InfoSection