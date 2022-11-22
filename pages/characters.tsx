import React from 'react'
import Head from 'next/head'
import Header from '../components/styled/header'
import { Container, DivAds, InArticleAds, Main, StickyAdLeft, StickyAdRight, StyledCard } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'

import { StructuredText, useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import Footer from '../components/styled/footer';
import Image from 'next/image';
import { Adsense } from '@ctrl/react-adsense';

const PROJECTS_QUERY = `
query MyQuery {
  allCharacters(first: 100) {
    characterImage {
      url
    }
    characterName
    characterDescription {
      value
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

const Characters = ({subscription}) => {

  const { data, error, status } = useQuerySubscription(subscription);
  
  return (  
  <>
      <Head>
        <title>Brotato Meta All Characters - MetaBrotato</title>
        <meta name="title" content="Brotato Meta All Characters - MetaBrotato"></meta>
        <meta
          name="description"
          content="Discover all Brotato Characters and improve your builds on Brotato - MetaBrotato."
        />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.metabrotato.com/characters" />
      <meta property="og:title" content="Brotato Meta All Characters - MetaBrotato" /> 
      <meta property="og:description" content="Discover all Brotato Characters and improve your builds on Brotato - MetaBrotato." />
      <meta property="og:image" content="/characters.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.metabrotato.com/characters" />
      <meta property="twitter:title" content="Brotato Meta All Characters - MetaBrotato" />
      <meta property="twitter:description" content="Discover all Brotato Characters and improve your builds on Brotato - MetaBrotato." />
      <meta property="twitter:image" content="/characters.png"></meta>
      </Head>

    <Header />

    <DivAds>
    <Adsense
      className='adsbygoogle'
      client="ca-pub-2203319803462882"
      slot="6353395675"
      style={{ display: 'block', height: '300px' }}
      layout="in-article"
      format="fluid"
      responsive='true'
    />
    </DivAds>

    <StickyAdLeft>
      <Adsense
          client="ca-pub-2203319803462882"
          slot="8115163353"
          style={{ display: 'block', width: '250px', height: '700px'  }}
          format="auto"
        />
    </StickyAdLeft>

    <StickyAdRight>
      <Adsense
          client="ca-pub-2203319803462882"
          slot="2870892765"
          style={{ display: 'block', width: '250px', height: '700px'  }}
          format="auto"
        />

    </StickyAdRight>



    <Main>
      <Title text="All Characters"/>
      <Container>
        {data.allCharacters.map((item, index) => {
          return (
            <>
            <StyledCard key={index}>
              <div>
                <Image src={item.characterImage[0].url} alt={`Character: ${item.characterName}`} width={'90px'} height={'90px'} />
                <h2>{item.characterName}</h2>
              </div>
              <StructuredText data={item.characterDescription}/>
            </StyledCard>
            <InArticleAds style={{display: index % 5 == 1 ? 'block' : 'none'}}>
              <Adsense
                className='adsbygoogle'
                client="ca-pub-2203319803462882"
                slot="6666420125"
                style={{ display: 'block', textAlign: 'center'}}
                layout="in-article"
                format="fluid"
              />
              <Adsense
                className='adsbygoogle'
                client="ca-pub-2203319803462882"
                slot="6666420125"
                style={{ display: 'block', textAlign: 'center', marginTop: 16}}
                layout="in-article"
                format="fluid"
              />
            </InArticleAds> 
            </>
          )
        })}
      </Container>
    </Main>

    <DivAds>
      <Adsense
        className='adsbygoogle'
        client="ca-pub-2203319803462882"
        slot="9274904617"
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
export default Characters