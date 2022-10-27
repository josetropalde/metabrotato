import Head from 'next/head'
import Cards from '../components/styled/cards'
import Header from '../components/styled/header'
import { Container, Main } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'
import Footer from '../components/styled/footer'

const Home = () => {

  return (  
  <>
    <Head>
      <title>Brotato Meta Best Strategies, Meta, Guides - MetaBrotato</title>
      <meta
        name="description"
        content="Discover best Brotato Strategies, Guides and Meta - MetaBrotato."
      />
    </Head>

    <Header />

    <Main>
      <Title text="Welcome" />
      <Container>

      </Container>
    </Main>

        <Footer />
  </>
  )
}
export default Home