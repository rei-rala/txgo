import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer, Header, Section, /* Loader */ } from '../components'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>TxGO, Tú en la Blockchain</title>
        <meta name="description" content="Tú, en la Blockchain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <Loader /> */}
      <Section />

      <Footer />
    </>
  )
}

export default Home
