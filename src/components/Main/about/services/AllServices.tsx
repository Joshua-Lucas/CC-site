import React from 'react'
import styled from 'styled-components'
import Service from './Service'
//svgs
import Buisness from './svg/buisness'
import Digital from './svg/digital'
import Operations from './svg/operations'
import People from './svg/people'

//Styled-Components
const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const AllServices = () => {
  const Services = [
    {
      svg: <Buisness />,
      title: 'business growth',
      description: 'knowing where to invest.',
      link: false,
    },
    {
      svg: <Operations />,
      title: 'operations',
      description: 'improving day to day efficiencies',
      link: false,
    },
    {
      svg: <Digital />,
      title: 'digital solutions',
      description:
        'mange Google ads, digital marketing campgains, web design, web accesability, and SEO',
      link: true,
    },
    {
      svg: <People />,
      title: 'employee development',
      description: 'finding and empowering great people.',
      link: false,
    },
  ]

  const allProducts = Services.map((service) => {
    return (
      <Service
        key={service.title}
        svg={service.svg}
        title={service.title}
        description={service.description}
        link={service.link}
      />
    )
  })

  return (
    <>
      <ServicesWrapper>{allProducts}</ServicesWrapper>
    </>
  )
}

export default AllServices
