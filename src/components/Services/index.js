import React from 'react'
import IconTravel from '../../images/svg-3.svg'
import Icon4 from '../../images/undraw_educator_re_ju47.svg'
import IconPiegraph from '../../images/undraw_pie_graph_re_fvol.svg'
import IconKeyboard from '../../images/undraw_typewriter_re_u9i2.svg'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
  ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="coolthings">
      <ServicesH1>Showcase</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={IconPiegraph}/>
          <ServicesH2>Spreadsheets</ServicesH2>
          <ServicesP>Some of my most used spreadsheets.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={IconKeyboard}/>
          <ServicesH2>Keyboards</ServicesH2>
          <ServicesP>My mechanical keyboard builds, specficiations and general media.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={IconTravel}/>
          <ServicesH2>Travel</ServicesH2>
          <ServicesP>Places I've been and want to go.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Tutoring</ServicesH2>
          <ServicesP>My past teaching and tutoring, and volunteer prospects.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services