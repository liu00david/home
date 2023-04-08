import React from 'react'

const InfoSection = () => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
            <TextWrapper>
            <TopLine>TopLine</TopLine>
            <Heading>Heading</Heading>
            <Subtitle>Subs</Subtitle>
            <BtnWrap>
                <Button to="home">Buttonhere</Button>
            </BtnWrap>
            </TextWrapper>
            </Column1>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection