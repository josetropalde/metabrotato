import Head from 'next/head'
import Cards from '../components/styled/cards'
import Header from '../components/styled/header'
import { Container, Main } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'
import Footer from '../components/styled/footer'
import styled from 'styled-components'
import Link from 'next/link'
import brotatoHome from '../public/brotato.png'
import Image from 'next/image'

const Introduction = styled.div`
margin-top: 4rem;
text-align: center;
`

const Features = styled.div`
display: block;
margin-top: 4rem;
@media (min-width: 64rem) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem 1rem;
  margin: 0;
  margin-top: 8rem;
}
`
const Feature = styled.div`
background-color: ${({theme}) => theme.colors[600]};
display: block;
margin: 1rem auto;
text-align: center;
padding: 1rem;
border-radius: .5rem;
max-width: 25rem;
cursor: pointer;
h4 {
  font-size: 1.5rem;
}
p {
  margin-top: 1rem;
  height: 100px;
}
@media (min-width: 64rem) {
  max-width: unset;
  padding: 4rem 2rem;
  width: 33%;
}
`


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
      <Title text="The best place for Brotato stats and strategies" />
      <Container>
          <Introduction>
            <Image src={brotatoHome} alt="Welcome to MetaBrotato"/>
            <h3>MetaBrotato</h3>
            <p>Play smarter and win all danger levels with constantly updated guides, characters recommendations, and new meta strategies.</p>
          </Introduction>
          
          <Features>
            <Link href='/strategies'>
            <Feature>
              <h4>Strategies</h4>
              <p>Check out all the brotato best strategies and never lose a run again!</p>
            </Feature>
            </Link>
            <Link href='/characters'>
            <Feature>
              <h4>Characters</h4>
              <p>Find out all about brotato characters and choose the best one for you</p>
            </Feature>
            </Link>
            <Link href='/items'>
            <Feature>
              <h4>Items</h4>
              <p>Never forget about brotato items again!</p>
            </Feature>
            </Link>
          </Features>
      </Container>
    </Main>

        <Footer />
  </>
  )
}
export default Home