import Link from 'next/link'
import styled from 'styled-components'


const StyledFooter = styled.div`
  background-color: ${({theme}) => theme.colors[900]};
  padding: 1rem;
  text-align: center;
  display: block;
  margin-top: 4rem;
  a {
    color: ${({theme}) => theme.colors[300]};
    font-size: .75rem;
    margin: 0 .5rem;
  }
  @media (min-width: 64rem) {
    margin-top: 8rem;
  }
`




const Footer = () => {
  return (
  <>
    <StyledFooter>
      <p>© MetaBrotato 2022</p>
      <Link href='/privacy'>Privacy Policy</Link>
      <Link href='/terms'>Terms & Conditions</Link>
      <Link href='/contact'>Contact</Link>
    </StyledFooter>
  </>
  )
}

export default Footer;