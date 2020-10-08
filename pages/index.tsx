import React from 'react'
import Head from 'next/head'
import Main from '../src/components/Main/Main'
import Layout from '../src/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cordle Consulting</title>
        <meta name="Description" content="Consulting information" key="Home" />
      </Head>
      <Layout>
        <Main />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
