import React from 'react'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cordle Consulting</title>
        <meta name="Description" content="Consulting information" key="Home" />
      </Head>
      <Header />
      <Main />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
