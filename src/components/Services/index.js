import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
  ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="coolthings">
      <ServicesH1>My accomplishments</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reduce exp</ServicesH2>
          <ServicesP>I will do this for you I will do this for you I will do this for you</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>NUMBA 2</ServicesH2>
          <ServicesP>I will do this for you 2</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>NUMBA 3</ServicesH2>
          <ServicesP>I will do this for you 3</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>NUMBA 4</ServicesH2>
          <ServicesP>lastly, this thing.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services