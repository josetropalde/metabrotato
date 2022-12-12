import Head from 'next/head'
import Header from '../components/styled/header'
import { AuthAnchor, AuthButton, AuthCard, AuthForm, AuthInput, AuthTitle, Container, Main } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'
import Footer from '../components/styled/footer'
import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'



const Login = () => {
  const router = useRouter()
  const { user, signIn } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const handleSignIn = async (event: any) => {
    event.preventDefault();
    try {
      await signIn(data.email, data.password)
    } catch (err) {
      console.log(err)
    } finally {
      router.push('/')
    }
  }


  return (  
  <>
    <Head>
      <title>Login - MetaBrotato</title>
      <meta name="title" content="Login - MetaBrotato"></meta>
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
          <AuthTitle>Login</AuthTitle>
          <AuthCard>
            <AuthForm onSubmit={handleSignIn}>
              <AuthInput 
                placeholder='User' 
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
              <AuthButton fontColor="#000" themeColor="100" type='submit'>Sign In</AuthButton>
            </AuthForm>
            <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '2rem'}}>
              <AuthAnchor fontColor="#fff" themeColor="900" type="submit">
                <Link href="/register">Sign Up</Link>
              </AuthAnchor>
              <AuthAnchor fontColor="#fff" themeColor="900" type="submit">
                <Link href="/forgotPass">Forgot Password</Link>
              </AuthAnchor>
            </div>
          </AuthCard>
          
      </Container>
    </Main>

        <Footer />
  </>
  )
}
export default Login