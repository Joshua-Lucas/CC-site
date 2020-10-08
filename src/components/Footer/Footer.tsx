import React from 'react'
import styled from 'styled-components'

//Styled Components
const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 4.25rem 0.6875rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: 768px) {
    padding: 4.25rem 15.625vw 1.5rem;
  }
`

const CopyRight = styled.p`
  font-size: 1rem;
  line-height: 19px;
  padding: 0;
`

const Footer: React.FC = () => {
  const getCurrentYear = new Date()

  return (
    <FooterWrapper>
      <CopyRight>@{getCurrentYear.getFullYear()} Test Page</CopyRight>
    </FooterWrapper>
  )
}
export default Footer
