/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Link from 'next/link'

//Styled Components

const NavContainer = styled.nav<IToggleProps>`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 3.55rem 0 5rem;
  z-index: 50;
  position: absolute;
  top: -100;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${(props) =>
    !props.toggle ? 'translateY(-100%)' : 'translateY(0%)'};
  transition: ${(props) =>
    !props.toggle ? 'transform 0.2s ease-in' : 'transform 0.3s ease-out'};

  @media (min-width: 786px) {
    position: static;
    width: auto;
    padding: 0;
    height: auto;
    flex-direction: row;
    align-items: center;
    transform: translateY(0);
  }
`

const NavLink = styled.a`
  margin-bottom: 3.32rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    border-bottom: ${rem('2px')} solid ${({ theme }) => theme.colors.primary};
  }
  @media (min-width: 786px) {
    padding: 0;
    margin: 0 1rem;
    font-size: 1rem;
  }
`

//Interfaces
interface INav {
  navLinks: string[]
  toggleNav: boolean
}
interface IToggleProps {
  toggle: boolean
}

const Nav: React.FC<INav> = ({ navLinks, toggleNav }) => {
  return (
    <>
      <NavContainer toggle={toggleNav} aria-label="Navigation Label">
        {navLinks.map((link) => (
          <Link key={link} href={`/#${link}`}>
            <NavLink>{link}</NavLink>
          </Link>
        ))}
        <Link href="/contact">
          <NavLink>Contact</NavLink>
        </Link>
      </NavContainer>
    </>
  )
}

export default Nav
