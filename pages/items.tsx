import Head from 'next/head'
import Header from '../components/styled/header'
import { Container, Main, StyledCard } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'

import { StructuredText, useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";

const PROJECTS_QUERY = `
query MyQuery {
  allItems(first: 100) {
    itemName
    itemImage {
      url
    }
    itemDescription {
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
  console.log(data)

  return (  
  <>
      <Head>
      <title>All Items - MetaBrotato</title>
      <meta
        name="description"
        content="Discover the best Brotato Strategies, item builds, and more with MetaBrotato."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Main>
      <Title title="All Items"/>
      <Container>
        {data.allItems.map((item, index) => {
          return (
            <StyledCard key={index}>
              <div>
                <img src={item.itemImage[0].url} alt="" />
                <h2>{item.itemName}</h2>
              </div>
              <StructuredText data={item.itemDescription}/>
            </StyledCard>
          )
        })}
      </Container>
    </Main>

  </>
  )
}
export default Characters