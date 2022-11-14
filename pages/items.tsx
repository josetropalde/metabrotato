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

  return (  
  <>
      <Head>
        <title>Brotato Meta All Items - MetaBrotato</title>
        <meta
          name="description"
          content="Discover all Brotato Items - MetaBrotato."
        />
      </Head>

    <Header />

    <Main>
      <Title text="All Items"/>
      <Container>
        {data.allItems.map((item, index) => {
          return (
            <StyledCard key={index}>
              <div>
                <Image src={item.itemImage[0].url} alt={`Item: ${item.itemName}`} width={'90px'} height={'90px'} />
                <h2>{item.itemName}</h2>
              </div>
              <StructuredText data={item.itemDescription}/>
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