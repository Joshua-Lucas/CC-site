import React, { ReactSVGElement, SVGAttributes } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

//Styled Components
const ServiceWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding-bottom: 0.75rem;
  font-weight: 200;
  text-align: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.neutralAccent};
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
        {svg}
        <ServiceTitle>{title}</ServiceTitle>
        <ServiceDescription>{description}</ServiceDescription>
        {link ? <Link href={`/${title}`}>See more</Link> : null}
      </ServiceWrapper>
    </>
  )
}
export default Service
