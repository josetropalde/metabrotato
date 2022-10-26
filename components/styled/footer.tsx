import { useState } from 'react'
import styled from 'styled-components'


const StyledFooter = styled.div`
  background-color: ${({theme}) => theme.colors[900]};
  padding: 1rem;
  text-align: center;
  @media (min-width: 64rem) {
 
  }
`




const Footer = () => {
  return (
  <>
    <StyledFooter>
      <p>© MetaBrotato 2022</p>
    </StyledFooter>
  </>
  )
}

export default Footer;