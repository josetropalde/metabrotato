import React from 'react'
import Head from 'next/head'
import Cards from '../components/styled/cards'
import Header from '../components/styled/header'
import { Container, DivAds, Main } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'

import { useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import Footer from '../components/styled/footer'
import styled from 'styled-components'
import { Adsense } from '@ctrl/react-adsense'





const PROJECTS_QUERY = `
query MyQuery {
  allCards(orderBy: tier_ASC, first: "100") {
    tier
    difficulty
    isnew
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
const Patch = styled.h2`
  font-size: 1rem;
  font-weight: normal;
`
const Strategies = ({subscription}) => {

  const { data, error, status } = useQuerySubscription(subscription);

  return (  
  <>
    <Head>
      <title>Brotato Meta Best Strategies - MetaBrotato</title>
      
      <meta name="title" content="Brotato Meta Best Strategies - MetaBrotato"></meta>
      <meta
        name="description"
        content="Discover best Brotato Strategies, Guides and Builds to win more runs on Brotato with the best builds of the meta - MetaBrotato."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.metabrotato.com/strategies" />
      <meta property="og:title" content="Brotato Meta Best Strategies - MetaBrotato" /> 
      <meta property="og:description" content="Discover best Brotato Strategies, Guides and Builds to win more runs on Brotato with the best builds of the meta" />
      <meta property="og:image" content="/strategies.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.metabrotato.com/strategies" />
      <meta property="twitter:title" content="Brotato Meta Best Strategies - MetaBrotato" />
      <meta property="twitter:description" content="Discover best Brotato Strategies, Guides and Builds to win more runs on Brotato with the best builds of the meta" />
      <meta property="twitter:image" content="/strategies.png"></meta>
    </Head>

    <Header />
    <DivAds>
      <Adsense
        className='adsbygoogle'
        client="ca-pub-2203319803462882"
        slot="6353395675"
        style={{ display: 'block' }}
        layout="in-article"
        format="fluid"
        responsive='true'
      />
    </DivAds>


    <Main>
      <Title text="Best Strategys" />
      <Patch>Patch 0.6.0.7</Patch>
      <Container>
        {data.allCards.map((card, index) => {
          return (
            <Cards 
            tier={card.tier} 
            name={card.name} 
            character={card.character} 
            weapons={card.items}
            isNew={card.isnew}
            difficulty={card.difficulty}

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
    <DivAds>
    <Adsense
      className='adsbygoogle'
      client="ca-pub-2203319803462882"
      slot="6353395675"
      style={{ display: 'block' }}
      layout="in-article"
      format="fluid"
      responsive='true'
    />
    </DivAds>
    
    <Footer />
  </>
  )
}
export default Strategies;