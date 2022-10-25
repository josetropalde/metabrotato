import Head from 'next/head'
import Header from '../components/styled/header'
import { Container, Main } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'

import { useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";

const PROJECTS_QUERY = `
query MyQuery {
  allCharacters {
    characterImage {
      url
    }
    characterName
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
      <title>All Characters - MetaBrotato</title>
      <meta
        name="description"
        content="Discover the best Brotato Strategies, item builds, and more with MetaBrotato."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Main>
      <Title title="All Characters"/>
      <Container>
        {data.allCharacters.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.characterImage[0].url} alt="" />
              <h2>{item.characterName}</h2>
            </div>
          )
        })}
      </Container>
    </Main>

  </>
  )
}
export default Home