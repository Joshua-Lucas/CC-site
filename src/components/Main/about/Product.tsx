import React from 'react'

import Link from 'next/link'

//Styled Components

//Interfaces
interface IProductProps {
  title: string
  description: string
  link: boolean
  linkhref: string
  linkText: string
}
//React Component
const Product: React.FC<IProductProps> = ({
  title,
  description,
  link,
  linkhref,
  linkText,
}) => {
  return (
    <>
      <p>svg here</p>
      <h3>{title}</h3>
      <p>{description}</p>
      {!link == null ? <Link href={`/${linkhref}`}>{linkText}</Link> : null}
    </>
  )
}
export default Product
