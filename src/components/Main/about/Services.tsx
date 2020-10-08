import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'
import AllServices from './services/AllServices'

//Styled Components
const ProductWrapper = styled.section`
  margin: 0;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.alternative};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SectionHeader = styled.h1`
  width: 90%;
  margin: 0;
  padding-bottom: 1.25rem;
  font-size: 3rem;
  border-bottom: ${rem('2px')} solid
    ${({ theme }) => theme.colors.neutralAccent}; ;
`
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionSubHeader = styled.p`
  color: ${({ theme }) => theme.colors.neutralAccent};
  text-transform: uppercase;
  font-size: 1.2rem;
`

const SvgAccent = styled.svg`
  margin: 0;
  display: block;
  fill: ${({ theme }) => theme.colors.alternative};
`
//Interfaces

//React Component
const Services: React.FC = () => {
  return (
    <>
      <ProductWrapper>
        <SectionHeader>How can we help?</SectionHeader>
        <ServicesContainer>
          <SectionSubHeader>difficulty comes during . . .</SectionSubHeader>
          <AllServices />
        </ServicesContainer>
      </ProductWrapper>
      <SvgAccent viewBox="0 0 450 55">
        <polygon points="450,0 450,30 0,0" />
      </SvgAccent>
    </>
  )
}
export default Services
