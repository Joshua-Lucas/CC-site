import React from 'react'
import styled from 'styled-components'
import Footer from './Footer/Footer'

import Header from './Header/Header'

// Style Components
const MainContent = styled.main`
  margin-top: 0;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  )
}

export default Layout
