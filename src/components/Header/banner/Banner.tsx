import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import BannerText from './BannerText'

const BannerWrapper = styled.div`
  width: 100%;
  z-index: 10;
  background: ${({ theme }) => theme.colors.secondary};
  @media (min-width: 1024px) {
    height: 65vh;
  }
  @media (min-width: 1280px) {
    height: 55vh;
  }
`

const BannerContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 786px) {
    height: 100%;
    max-width: 70%;
    margin: auto;
    flex-direction: row-reverse;
    justify-content: center;
  }
`

const BannerImage = styled.img`
  width: 100%;
  z-index: 10;
  @media (min-width: 786px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    max-width: ${rem('690px')};
    align-self: flex-start;
    /* margin-left: 4rem; */
  }
`

const Banner: React.FC = () => {
  const image =
    'https://res.cloudinary.com/jlucompany/image/upload/v1601748775/CordleConsulting/Bronson_Cordle_xxgiuy.jpg'
  return (
    <>
      <BannerWrapper>
        <BannerContainer>
          <BannerImage src={image} alt="me" />
          <BannerText />
        </BannerContainer>
      </BannerWrapper>
    </>
  )
}
export default Banner
