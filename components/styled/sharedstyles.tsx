import styled from 'styled-components'

const Main = styled.main`
padding: 0 5%;
  @media (min-width: 64rem) {
    padding: 0 20%;
  }
`
const Container = styled.div`
margin-top: 2rem;

`

const Item = styled.img`
&::after {
    content: '>';
}
  max-width: 40px;
margin: .0625rem .25rem;
@media(min-width: 64rem) {
  max-width: 50px;
margin: .0625rem .25rem;
}
`

const DivEarlyLate = styled.div`
display: block;
margin: 1rem 0;
`

export {Main, Container, Item, DivEarlyLate }
