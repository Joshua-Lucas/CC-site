import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

//Styled Components
const FooterHelpWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border-top: 2px solid #d8d8d8;
  @media (min-width: 786px) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1.5rem;
  }
`
const Helpers = styled.div``

const HelpNavLinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-bottom: 7.75rem;
  line-height: 26px;
  @media (min-width: 786px) {
    margin-bottom: 0;
  }
`

const HelpNavLinks = styled.a`
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  line-height: 1.5rem;
  text-decoration: none;
  font-size: 1.25rem;
  padding-bottom: 1.25rem;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.neutralAccent};
    outline: transparent;
  }
`

//React Component
const FooterLinks: React.FC = () => {
  const HelperLinks = ['Home', 'Blog', 'Contact']

  return (
    <FooterHelpWraper>
      <Helpers>
        <HelpNavLinkContainer>
          {HelperLinks.map((item) => (
            <Link href={`/${item}`} key={item}>
              <HelpNavLinks>{item}</HelpNavLinks>
            </Link>
          ))}
        </HelpNavLinkContainer>
      </Helpers>
    </FooterHelpWraper>
  )
}
export default FooterLinks
