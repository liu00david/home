import React from "react";
import { MainContainer, MainWrapper } from './PhotographCardsElements'

const PhotographCards  = () => {

//   const ref = useRef();
//   const [isVisible, setIsVisible] = useState(false);

//   const fade = useSpring({
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? 'translateY(0%)' : 'translateY(6%)',
//     config: { duration: 750 },
//   });

//   const handleScroll = () => {
//     if (!ref.current) { return; }
//     const { top, bottom } = ref.current.getBoundingClientRect();
//     const isVisible = top < window.innerHeight && bottom >= 0;
//     setIsVisible(isVisible);
//   };

//   window.addEventListener("scroll", handleScroll);

  return (
    <MainContainer id="photographcards">
    <MainWrapper>
        hi
    </MainWrapper>
    </MainContainer>
  )
}

export default PhotographCards