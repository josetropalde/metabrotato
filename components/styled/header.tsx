import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../../context/AuthContext'

interface Props {
  mobileActive?: boolean
}

const DivHeader = styled.div`
  background-color: ${({theme}) => theme.colors[800]};
  padding: 1rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: 80rem) {
    padding: 1rem 20%;
  }
`
const DivLogo = styled.div`
display: flex;
align-items: center;
gap: 0 .5rem;
cursor: pointer;
`
const StyledLogo = styled.img`
  width: 3.125rem;
`
const TextLogo = styled.h2`
  font-size: 1.75rem;
`
const Logo = ({url, text}) => {
  return (
    <Link href='/'>
      <DivLogo>
        <StyledLogo src={url} alt="MetaBrotato Logos"/>
        <TextLogo>{text}</TextLogo>
      </DivLogo>
    </Link>
  )
}

const MobileButton = styled.span`
  border-top: .1875rem solid ${({theme}) => theme.colors[100]};
  display: block;
  width: 25px;

  &:before {
    content: '';
    width: 25px;
    height: .1875rem;
    display: block;
    background-color: ${({theme}) => theme.colors[100]};
    margin-top: 6px;
  }
  &:after {
    content: '';
    width: 25px;
    height: .1875rem;
    display: block;
    background-color: ${({theme}) => theme.colors[100]};
    margin-top: 6px;
  }

  @media (min-width: 64rem) {
    display: none;
  }
`

const DivMenu = styled.nav`
background-color:  ${({theme}) => theme.colors[800]};
width: 100%;
padding: 0 5%;
height: 0;
visibility: hidden;
overflow: hidden;
transition: .3s;
@media (min-width: 64rem) {
display: none;
}
  ${(props: Props)  => {
    if(props.mobileActive) {
      return`
        height: 350px;
        visibility: visible;
        overflow: auto;
        padding: .5rem 5%;
      `
    }
  }
 
}
`
const DivDesktopMenu = styled.nav`
display: none;

@media (min-width: 64rem) {
margin-left: auto;
display: block;
text-align: center;
position: absolute;
top: 100%;
left: 0;
background-color: ${({theme}) => theme.colors[900]};
width: 100%;
padding: 1rem 0;
text-align: center;
}
`
const Anchors = styled.li`
margin: 2rem 0;
font-size: 1.125rem;
&:hover {
  color: ${({theme}) => theme.colors[200]};
}
@media (min-width: 64rem) {
  display: inline;
  margin: 0 1rem;
  font-size: 1rem;
}
`
const HeaderButton = styled.div`
background-color: ${({theme}) => theme.colors[100]};
  display: inline-block;
  border-radius: .5rem;
  margin: 0 .5rem;
  padding: .25rem 1rem;
  color: ${({theme}) => theme.colors[900]};
  cursor: pointer;
  transition: .3s;
  &:hover {
  background-color: ${({theme}) => theme.colors[50]};
  }
`

const Menu = ({mobileActive: Props}) => {
  const { user, logOut } = useAuth()
  const router = useRouter();
  return (
    <DivMenu mobileActive={Props}>
      <ul>
        <Anchors><Link href="/">Home</Link></Anchors>
        <Anchors><Link href="/rank">Rank</Link></Anchors>
        <Anchors><Link href="/strategies">Strategies</Link></Anchors>
        <Anchors><Link href="/characters">Characters</Link></Anchors>
        <Anchors><Link href="/items">Items</Link></Anchors>
      </ul>
    </DivMenu>
  )
}
const DesktopMenu = () => {
  return (
    <DivDesktopMenu>
      <ul>
        <Anchors><Link href="/">Home</Link></Anchors>
        <Anchors><Link href="/strategies">Strategies</Link></Anchors>
        <Anchors><Link href="/rank">Rank</Link></Anchors>
        <Anchors><Link href="/characters">Characters</Link></Anchors>
        <Anchors><Link href="/items">Items</Link></Anchors>
      </ul>
    </DivDesktopMenu>
  )
}

const HeaderInfo = (mobile) => {
  const { user, logOut } = useAuth()
  const router = useRouter();  
  return (
    <div style={{textAlign: mobile.mobile == false ? 'center' : 'start', padding: mobile.mobile == false  ? '1rem' : '0', backgroundColor: mobile.mobile == false  ? '#1c1917' : ''}}>
      {user ? <span>Welcome, {user.name}</span> : ''}
      {user ? '' : <HeaderButton><Link href='/register'>Sign Up</Link></HeaderButton>}
      {user ? <HeaderButton onClick={() => {
        logOut()
      }}>Logout</HeaderButton> : <HeaderButton><Link href="/login">Login</Link></HeaderButton>}
    </div>
  )
}

const Header = () => {
  const [mobileActive, setMobileActive]= useState(false)
  const [logoImage, setLogoImage]= useState(0)

  const imagesLogo = [
    '/characters/brawlericonpng.png',
    '/characters/chunkyiconpng.png',
    '/characters/crazyiconpng.png',
    '/characters/explorericonpng.png',
    '/characters/luckyiconpng.png',
  ]
  const useWindowWide = (size) => {
    const [width, setWidth] = useState(0)
    
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth)
      }
      
      window.addEventListener("resize", handleResize)
      
      handleResize()
      
      return () => { 
        window.removeEventListener("resize", handleResize)
      }
    }, [setWidth])
    
    return width > size
  }

  const mobile = useWindowWide(1024)

  useEffect(() => {

  let imagesIndex = 0
    setInterval(() => {
      imagesIndex++
      if(imagesIndex > (imagesLogo.length - 1) )  {
        imagesIndex = 0;
      }
      setLogoImage(imagesIndex)
    }, 1500)
  }, [])
  
  return (
  <>
   <header>
    <DivHeader>
        <Logo url={imagesLogo[logoImage]} text='MetaBrotato'/>
        <DesktopMenu />
        {mobile ? <HeaderInfo /> : ''}
        <MobileButton onClick={() => setMobileActive(!mobileActive)}/>
    </DivHeader>
    {mobile ? '' : <HeaderInfo mobile={mobile}/>}

    <Menu mobileActive={mobileActive} />
   </header>
  </>
  )
}

export default Header;