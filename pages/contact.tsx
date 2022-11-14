import Head from 'next/head'
import styled from 'styled-components'
import Footer from '../components/styled/footer'
import Header from '../components/styled/header'
import { Container, Main } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'



const ContactDiv = styled.div`
height: 55vh;
p {
  margin-bottom: 3rem;
}
a {
  font-weight: bold;
}
`
const Contact = () => {

  return (  
  <>
      <Head>
        <title>Contact Us - MetaBrotato</title>
        <meta
          name="description"
          content="Contact - MetaBrotato."
        />
      </Head>

    <Header />

    <Main>
      <Title text="Contact"/>
      <Container>
        <ContactDiv>        
          <p>If you would like to request a feature, report a bug, or give feedback on the tier list, please feel free to send us a message. Business inquiries as well.</p>

        <a href="mailto:metabrotato@gmail.com">metabrotato@gmail.com</a>
        </ContactDiv>
      </Container>
    </Main>
    
    <Footer />
  </>
  )
}
export default Contact;