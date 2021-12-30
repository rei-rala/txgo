import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer, Header, Section } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TxGO</title>
        <meta name="description" content="Tú, en la blockchain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Section />
      <Footer />

    </>
  )
}

export default Home
