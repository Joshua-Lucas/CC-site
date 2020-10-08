import React, { ReactSVGElement, SVGAttributes } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { rem } from 'polished'

//Styled Components
const ServiceWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 786px) {
    width: 50%;
  }
`

const ServiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: last baseline;
`

const ServiceTitle = styled.h2`
  margin: 0;
  padding: 1rem;
  align-self: center;
  font-size: 1.75rem;
  font-weight: 900;
  text-transform: capitalize;
  text-align: center;
`

const ServiceDescription = styled.p`
  margin: 0 auto;
  width: 85%;
  padding-bottom: 1rem;
  font-weight: 200;
  text-align: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.neutralAccent};
`

const ServiceLink = styled.a`
  padding: 0.75rem;
  cursor: pointer;
  border: ${rem('2px')} solid ${({ theme }) => theme.colors.primary};
  border-radius: 10rem;
  color: ${({ theme }) => theme.colors.primary};
  :hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

//Interfaces
interface IProductProps {
  svg: SVGAttributes<ReactSVGElement>
  title: string
  description: string
  link: boolean
}
//React Component
const Service: React.FC<IProductProps> = ({
  svg,
  title,
  description,
  link,
}) => {
  return (
    <>
      <ServiceWrapper>
        <ServiceDetails>
          {svg}
          <ServiceTitle>{title}</ServiceTitle>
        </ServiceDetails>
        <ServiceDescription>{description}</ServiceDescription>
        {link ? (
          <Link href={`/${title}`}>
            <ServiceLink>Learn more</ServiceLink>
          </Link>
        ) : null}
      </ServiceWrapper>
    </>
  )
}
export default Service
