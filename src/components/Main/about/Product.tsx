import React, { ReactSVGElement, SVGAttributes } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

//Styled Components
const ProductWrapper = styled.div`
  border: solid 2px ${({ theme }) => theme.colors.primary};
  margin: 2rem;
`
//Interfaces
interface IProductProps {
  svg: SVGAttributes<ReactSVGElement>
  title: string
  description: string
  link: boolean
}
//React Component
const Product: React.FC<IProductProps> = ({
  svg,
  title,
  description,
  link,
}) => {
  return (
    <>
      <ProductWrapper>
        {svg}
        <h3>{title}</h3>
        <p>{description}</p>
        {link ? <Link href={`/${title}`}>See more</Link> : null}
      </ProductWrapper>
    </>
  )
}
export default Product
