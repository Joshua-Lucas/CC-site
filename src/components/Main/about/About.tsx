import React from 'react'
import styled from 'styled-components'

//Styled Components
const AboutContainer = styled.div`
  margin: 0 0.75rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 786px) {
    max-width: 70%;
    justify-content: center;
    align-items: flex-end;
  }
`
const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  @media (min-width: 786px) {
    text-align: right;
    margin: 0;
    font-size: 4rem;
  }
`

const Subtitle = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 500;
  @media (min-width: 786px) {
    text-align: none;
    align-self: center;
    margin: 2rem;
  }
`
const AboutText = styled.p`
  text-align: center;
  line-height: 1.75;
  @media (min-width: 786px) {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 300;
  }
`
const SvgAccent = styled.svg`
  display: block;
  fill: ${({ theme }) => theme.colors.secondary};
`

//Interfaces

//React Component
const About: React.FC = () => {
  return (
    <>
      <SvgAccent viewBox="0 0 450 55">
        <polygon points="0,0 0,55 450,0" />
      </SvgAccent>
      <AboutContainer>
        <Title>Need help with buisness growth?</Title>
        <Subtitle>Hi! I am Bronson</Subtitle>
        <AboutText>
          I have learned many lessons throughout my buiness career focusing on
          operations and people development. I have a passion for people and
          sustainable development bloomed while I worked as a General Manager at
          a local firm Campus Quilt Company. I am here to share what I have
          learned with you to make your buiness flurish in todays market.
        </AboutText>
      </AboutContainer>
    </>
  )
}
export default About
