import React from 'react'
import styled from 'styled-components'

import Header from './components/Header/Header'

// Style Components
const MainContent = styled.main`
  margin-top: 0;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
    </>
  )
}

export default Layout
