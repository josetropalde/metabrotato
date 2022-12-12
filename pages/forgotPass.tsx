import Head from 'next/head'
import Header from '../components/styled/header'
import {  AuthButton, AuthCard, AuthForm, AuthInput, AuthTitle, Container, Main } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'
import Footer from '../components/styled/footer'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'


const ForgotPass = () => {
  const auth = getAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')

  const handleResetPassword = async (event: any) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, email)
    .then(() => { 
      router.push('/')
      setEmail('')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }



  return (  
  <>
    <Head>
      <title>Forgot Password - MetaBrotato</title>
      <meta name="title" content="Forgot Password - MetaBrotato"></meta>
      <meta
        name="description"
        content="Discover best Brotato Strategies, Guides and Meta to improve your builds on Brotato - MetaBrotato."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.metabrotato.com/" />
      <meta property="og:title" content="Brotato Meta Best Strategies, Meta, Guides - MetaBrotato" /> 
      <meta property="og:description" content="Discover best Brotato Strategies, Guides and Meta to improve your builds on Brotato - MetaBrotato." />
      <meta property="og:image" content="/home.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.metabrotato.com/" />
      <meta property="twitter:title" content="Brotato Meta Best Strategies, Meta, Guides - MetaBrotato" />
      <meta property="twitter:description" content="Discover best Brotato Strategies, Guides and Meta to improve your builds on Brotato - MetaBrotato." />
      <meta property="twitter:image" content="/home.png"></meta>
    </Head>

    <Header />

    <Main style={{marginTop: '12rem'}}>
      <Container>
          <AuthTitle>Forgot Password</AuthTitle>
          <AuthCard>
            <AuthForm onSubmit={handleResetPassword}>
              <AuthInput
                placeholder='Email' 
                type="text" 
                onChange={(event: any) => {
                  setEmail(event.target.value)
                }}
                value={email}
                required
              />
              <AuthButton fontColor="#fff" themeColor="900" type='submit'>Reset Password</AuthButton>
            </AuthForm>
          </AuthCard>
          
      </Container>
    </Main>

    <Footer />
  </>
  )
}
export default ForgotPass