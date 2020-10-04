import React from 'react'
import styled from 'styled-components'

//Styled Components
const ProductWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.alternative};
  color: ${({ theme }) => theme.colors.primary};
`
//Interfaces

//React Component
const Products: React.FC = () => {
  return (
    <>
      <ProductWrapper>
        <h1>How can we help?</h1>
        {/* Options of what we can do? */}
      </ProductWrapper>
    </>
  )
}
export default Products
