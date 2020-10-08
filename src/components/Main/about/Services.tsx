import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'
import AllServices from './services/AllServices'

//Styled Components
const ServiceWrapper = styled.section`
  margin: 0;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SectionHeader = styled.h1`
  width: 90%;
  margin: 0;
  padding-bottom: 3rem;
  font-size: 3rem;
  border-bottom: ${rem('2px')} solid
    ${({ theme }) => theme.colors.neutralAccent};
  @media (min-width: 1024px) {
    font-size: 5rem;
    width: 70%;
  }
`
const ServicesContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 786px) {
    width: 90%;
  }
  @media (min-width: 1024px) {
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const SectionSubHeader = styled.p`
  color: ${({ theme }) => theme.colors.neutralAccent};
  text-transform: uppercase;
  font-size: 1.2rem;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`

// const SvgAccent = styled.svg`
//   margin: 0;
//   display: block;
//   fill: ${({ theme }) => theme.colors.secondary};
// `

//React Component
const Services: React.FC = () => {
  return (
    <>
      <ServiceWrapper>
        <SectionHeader>How can we help?</SectionHeader>
        <ServicesContainer>
          <SectionSubHeader>difficulty comes during . . .</SectionSubHeader>
          <AllServices />
        </ServicesContainer>
      </ServiceWrapper>
      {/* <SvgAccent viewBox="0 0 450 55">
        <polygon points="450,0 450,30 0,0" />
      </SvgAccent> */}
    </>
  )
}
export default Services
