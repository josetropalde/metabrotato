import Link from 'next/link'
import { useState } from 'react'
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
    padding: 1rem 15%;
  }
`
const DivLogo = styled.div`
display: flex;
align-items: center;
gap: 0 .5rem;
`
const StyledLogo = styled.img`
  width: 3.125rem;
`
const TextLogo = styled.h1`
  font-size: 1.75rem;
`
const Logo = ({url, text}) => {
  return (
    <DivLogo>
      <StyledLogo src={url} />
      <TextLogo>{text}</TextLogo>
    </DivLogo>
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
padding: 0;
height: 0;
visibility: hidden;
overflow: hidden;
text-align: center;
${(props: Props)  => {
  if(props.mobileActive == true) {
    return`
      height: 100%;
      visibility: visible;
      overflow: auto;
      padding: 1rem 5%;
    `
  }
}}
`

const Menu = ({mobileActive: Props}) => {
  return (
    <DivMenu mobileActive={Props}>
      <ul>
        <li><Link href="#">Strategies</Link></li>
        <li><Link href="#">Potatos</Link></li>
        <li><Link href="#">Enemies</Link></li>
      </ul>
    </DivMenu>
  )
}



const Header = () => {
  const [mobileActive, setMobileActive]= useState(false)
  console.log(mobileActive)
  return (
  <>
   <header>
    <DivHeader>
        <Logo url='https://via.placeholder.com/125x125' text='MetaBrotato'/>
        <MobileButton onClick={() => setMobileActive(!mobileActive)}/>
    </DivHeader>

    <Menu mobileActive={mobileActive}/>
   </header>
  </>
  )
}

export default Header;