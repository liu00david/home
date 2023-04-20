import styled from 'styled-components'

export const HeroContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: right;
    align-items: top;
    position: relative;

    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
            linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%),
            linear-gradient(0deg, rgba(0,0,0,1) 0%, transparent 50%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: -1;
`

export const HeroContent = styled.div`
    position: relative;
    align-items: right;
    margin-right: 18vw;
    margin-top: 33vh;
    color: #fff;
    z-index: 3;
`

export const HeroH1 = styled.h1`
    text-align: right;

    font-size: 54px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 48px;
    }
`

export const HeroP = styled.p`
    font-size: 22px;
    text-align: right;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`

export const BarIcon = styled.div`
  position: relative;
  right: 0px;
  width: 60px;
  height: 5px;
  margin: 12px 0 0 auto;
  background-color: white;
  border-radius: 5px;
`

export const HeroPhaser = styled.div`
    background: linear-gradient(to bottom, #000000, transparent), #181825;
    height: 40px;
    z-index: 3;
`

// GuideFeature icon animation
export const GuideFeature = styled.div`
  opacity: ${props => props.opacity}%;
  top: ${props => props.top + 2}%;
  transform: rotate(${props => props.rotate}deg);
  font-size: ${props => props.size}rem;
  max-width: 50px;

  left: ${props => props.left}%;
  opacity: ${props => props.opacity}%;
  position: fixed;
  color: white;
  max-height: 0px;
  z-index: 100;


  @media screen and (max-width: 768px) {
    font-size: ${props => props.size/1.5}rem;
  }
`;

// export const StarTail1 = styled.div`
//   position: fixed;
//   top: ${props => props.top - 35}px;
//   right: 36px;
//   width: 4px;
//   height: 50px;
//   transform: translateX(-50%);
//   opacity: 80%;
//   background-color: ${contrastBluePurple};
//   border-radius: 10px;
// `;

// export const StarTail2 = styled.div`
//   position: fixed;
//   top: ${props => props.top - 27}px;
//   right: 28px;
//   width: 5px;
//   height: 35px;
//   transform: translateX(-50%);
//   opacity: 80%;
//   background-color: ${contrastBluePurple};
//   border-radius: 10px;
// `;

// export const StarTail3 = styled.div`
//   position: fixed;
//   top: ${props => props.top - 22}px;
//   right: 43px;
//   width: 4px;
//   height: 35px;
//   transform: translateX(-50%);
//   opacity: 80%;
//   background-color: ${contrastBluePurple};
//   border-radius: 10px;
// `;
