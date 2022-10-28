import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

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

  @media (min-width: 64rem) {
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
        <StyledLogo src={url} />
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
        height: 13.9375rem;
        visibility: visible;
        overflow: auto;
        padding: 1rem 5%;
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

const Menu = ({mobileActive: Props}) => {
  return (
    <DivMenu mobileActive={Props}>
      <ul>
        <Anchors><Link href="/">Home</Link></Anchors>
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
        <Anchors><Link href="/characters">Characters</Link></Anchors>
        <Anchors><Link href="/items">Items</Link></Anchors>
      </ul>
    </DivDesktopMenu>
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
        <MobileButton onClick={() => setMobileActive(!mobileActive)}/>
    </DivHeader>

    <Menu mobileActive={mobileActive}/>
   </header>
  </>
  )
}

export default Header;