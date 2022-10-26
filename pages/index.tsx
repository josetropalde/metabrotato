import Head from 'next/head'
import Cards from '../components/styled/cards'
import Header from '../components/styled/header'
import { Container, Main } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'

import { useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import Footer from '../components/styled/footer'

const PROJECTS_QUERY = `
query MyQuery {
  allCards(orderBy: _createdAt_ASC) {
    tier
    name
    character {
      url
    }
    items {
      url
    }
    itemsearly {
      url
    }
    itemslate {
      url
    }
    weaponsearly {
      url
    }
    weaponslate {
      url
    }
    statsearly {
      url
    }
    statslate {
      url
    }
  }
}
`;

export async function getStaticProps(context) {
  const graphqlRequest: any = {
    query: PROJECTS_QUERY,
    includeDrafts: context.preview,
  };
  return {
    props: {
      subscription: context.preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

const Home = ({subscription}) => {

  const { data, error, status } = useQuerySubscription(subscription);
  return (  
  <>
      <Head>
      <title>Brotato Meta Best Strategies and Builds - MetaBrotato</title>
      <meta
        name="description"
        content="Discover the best Brotato Strategies, item builds, and more with MetaBrotato."
      />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <Header />

    <Main>
      <Title text="Best Strategys" />
      <Container>
        {data.allCards.map((card, index) => {
          return (
            <Cards 
            tier={card.tier} 
            name={card.name} 
            character={card.character} 
            items={card.items} 

            itemsEarly={card.itemsearly}
            weaponsEarly={card.weaponsearly}
            statsEarly={card.statsearly}

            itemsLate={card.itemslate}
            weaponsLate={card.weaponslate}
            statsLate={card.statslate}
            key={index}/>
          )
        })}
      </Container>
    </Main>

        <Footer />
  </>
  )
}
export default Home