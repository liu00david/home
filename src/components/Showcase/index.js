import React from 'react'
import IconTravel from '../../images/svg-3.svg'
import Icon4 from '../../images/undraw_educator_re_ju47.svg'
import IconPiegraph from '../../images/undraw_pie_graph_re_fvol.svg'
import IconKeyboard from '../../images/undraw_typewriter_re_u9i2.svg'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
  ServicesIcon, ServicesH2, ServicesP } from './ShowcaseElements'

// Change all css to 'showcase'

const Showcase = () => {
  return (
    <ServicesContainer id="showcase">
      <ServicesH1>Showcase</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={IconPiegraph}/>
          <ServicesH2>Spreadsheets</ServicesH2>
          <ServicesP>Some of my most used spreadsheets to today. (turn into flipcard)</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={IconKeyboard}/>
          <ServicesH2>Keyboards</ServicesH2>
          <ServicesP>My mechanical keyboard builds, part specification, and general media.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={IconTravel}/>
          <ServicesH2>Travel</ServicesH2>
          <ServicesP>The places I've been or want to go, with recommendations and itineraries.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Tutoring</ServicesH2>
          <ServicesP>My past teaching and tutoring, some materials created, and volunteer prospects.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Showcase