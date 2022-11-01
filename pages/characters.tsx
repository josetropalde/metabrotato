import Head from 'next/head'
import Header from '../components/styled/header'
import { Container, Main, StyledCard } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'

import { StructuredText, useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import Footer from '../components/styled/footer';
import Image from 'next/image';

const PROJECTS_QUERY = `
query MyQuery {
  allCharacters(first: 30) {
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
        <meta
          name="description"
          content="Discover all Brotato Characters - MetaBrotato."
        />
      </Head>

    <Header />

    <Main>
      <Title text="All Characters"/>
      <Container>
        {data.allCharacters.map((item, index) => {
          return (
            <StyledCard key={index}>
              <div>
                <Image src={item.characterImage[0].url} alt={`Character: ${item.characterName}`} width={'90px'} height={'90px'} />
                <h2>{item.characterName}</h2>
              </div>
              <StructuredText data={item.characterDescription}/>
            </StyledCard>
          )
        })}
      </Container>
    </Main>

    <Footer />
  </>
  )
}
export default Characters