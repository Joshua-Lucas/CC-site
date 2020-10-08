import React, { useState } from 'react'
import styled from 'styled-components'
import LogoContainer from './LogosContainer'
import Nav from './nav'

//Styled Components
const ComponentContainer = styled.header`
  padding: 1rem 0;
  @media (min-width: 786px) {
    max-width: 70%;
    margin: auto;
    padding: 1.75rem 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
  }
`

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <ComponentContainer>
      <LogoContainer activateNav={setToggleNav} toggle={toggleNav} />
      <Nav toggleNav={toggleNav} navLinks={['Home', 'Blog']} />
    </ComponentContainer>
  )
}

export default Navigation
