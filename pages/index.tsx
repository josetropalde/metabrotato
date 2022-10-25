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
     itens: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150'],
     itemsEarly: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150',],
     weaponsEarly: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150',],
     statsEarly: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150',],
     itemsLate: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150',],
     weaponsLate: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150',],
     statsLate: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150',],
    },

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
            <Cards 
            tier={card.tier} 
            name={card.name} 
            character={card.character} 
            itens={card.itens} 

            itemsEarly={card.itemsEarly}
            weaponsEarly={card.weaponsEarly}
            statsEarly={card.statsEarly}

            itemsLate={card.itemsLate}
            weaponsLate={card.weaponsLate}
            statsLate={card.statsLate}
            key={index}/>
          )
        })}
      </Container>
    </Main>

  </>
  )
}
export default Home