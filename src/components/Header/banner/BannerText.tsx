import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Link from 'next/link'

//Styled Components
const TextContiner = styled.div`
  width: 100%;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`

const Title = styled.h1`
  margin: 0;
  font-family: Prompt;
  text-transform: capitalize;
  @media (min-width: 786px) {
    font-size: 4rem;
  }
`

const SubTitle = styled.p`
  margin-top: 0.5rem;
  font-weight: 300;
  @media (min-width: 786px) {
    font-size: 1.25rem;
  }
`

const LinkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`

const NavLink = styled.a`
  padding-right: 0.25rem;
  &:hover {
    border-bottom: ${rem('2px')} solid ${({ theme }) => theme.colors.accent};
  }
`

//React Component
const BannerText: React.FC = () => {
  return (
    <>
      <TextContiner>
        <Title>Helping you drive growth through transformaton</Title>
        <SubTitle>
          Consulting, Coaching, Digiatl Advancment and Traning
        </SubTitle>
        <LinkContainer>
          <Link href="/#">
            <NavLink>
              Unlock Growth <span> {'->'} </span>
            </NavLink>
          </Link>
        </LinkContainer>
      </TextContiner>
    </>
  )
}
export default BannerText
