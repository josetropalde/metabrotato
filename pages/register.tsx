import Head from 'next/head'
import Header from '../components/styled/header'
import {  AuthButton, AuthCard, AuthForm, AuthInput, AuthTitle, Container, Main } from '../components/styled/sharedstyles'
import Footer from '../components/styled/footer'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'


const Register = () => {
   const router = useRouter()
  const { user, signUp } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
    name: ''
  })
  const handleSignUp = async (event: any) => {
    event.preventDefault();
    try {
      await signUp(data.email, data.password, data.name)
    } catch (error) {
    } finally {
      router.push('/')
    }
  }



  return (  
  <>
    <Head>
      <title>Register - MetaBrotato</title>
      <meta name="title" content="Register - MetaBrotato"></meta>
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

    <Main>
      <Container>
          <AuthTitle>Register</AuthTitle>
          <AuthCard>
            <AuthForm onSubmit={handleSignUp}>
              <AuthInput
                placeholder='Name' 
                type="text" 
                onChange={(event: any) => {
                  setData({
                    ...data,
                    name: event.target.value,
                  })
                }}
                value={data.name}
                required
              />
              <AuthInput
                placeholder='Email' 
                type="email" 
                onChange={(event: any) => {
                  setData({
                    ...data,
                    email: event.target.value,
                  })
                }}
                value={data.email}
                required
              />
              <AuthInput               
                placeholder='Password' 
                type="password" 
                onChange={(event: any) => {
                  setData({
                    ...data,
                    password: event.target.value,
                  })
                }}
                value={data.password}
                required 
              />
              
              <span style={{marginLeft: '1rem'}}>I agree with <Link href="/terms">Terms and Conditions</Link></span>
              <AuthButton fontColor="#fff" themeColor="900" type='submit'>Register</AuthButton>
            </AuthForm>
          </AuthCard>
          
      </Container>
    </Main>

        <Footer />
  </>
  )
}
export default Register