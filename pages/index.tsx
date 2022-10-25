import Head from 'next/head'
import Cards from '../components/styled/cards'
import Header from '../components/styled/header'
import { Container, Main } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'


const Home = () => {
  const cardsData = [
    {tier: 'S',
     name: 'Healer', 
     character:'https://via.placeholder.com/150x150', 
     itens: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150'] },
    {tier: 'A',
     name: 'Chunky', 
     character:'https://via.placeholder.com/150x150', 
     itens: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150'] },

  ]
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

    <Main>
      <Title />
      <Container>
        {cardsData.map((card, index) => {
          return (
            <Cards tier={card.tier} name={card.name} character={card.character} itens={card.itens} key={index}/>
          )
        })}
      </Container>
    </Main>

  </>
  )
}
export default Home