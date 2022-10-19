import Head from 'next/head'
import Header from '../components/styled/header'
import {
  Title,
} from '../components/styled/sharedstyles'

const Home = () => {
  return (
  <>
      <Head>
      <title>Brotato Meta Best Strategies and Builds - MetaBrotato</title>
      <meta
        name="description"
        content="Discover the best Brotato Strategies, item builds, and more with MetaBrotato."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
      <Title>Teste</Title>
    </main>

  </>
  )
}
export default Home