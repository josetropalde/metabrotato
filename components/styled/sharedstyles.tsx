import styled from 'styled-components'

const Main = styled.main`
  padding: 0 5%;
  @media (min-width: 72rem) {
    padding: 0 20%;
  }
`
const Container = styled.div`
margin-top: 2rem;
`
const DivEarlyLate = styled.div`
display: block;
margin: 1rem 0;

`
const DivBgImages = styled.div`
display: inline-block;
background-color: ${({theme}) => theme.colors[700]};
border-radius: 0.25rem;
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
margin: .5rem;
position: relative;
img {
  max-width: 2.5rem !important;
  @media(min-width: 80rem) {
    max-width: 3.125rem !important;
  }
}
&:hover div {
  display: block;
}
`
const StyledCard = styled.div`
  background-color: #57534E;
  padding: 2rem;
  border-radius: .25rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-top: 1rem;
  h2 {
    font-size: 1rem;
  }
  p {
    margin-top: 1rem;
    font-size: .875rem;
  }
  @media(min-width: 48rem) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem 1rem;
    h2 {
      font-size: 1.5rem;
      text-align: center;
    }
    p {
      margin-top: 0;    
      width: 25rem;
      margin: auto;
    }
  }
  @media(min-width: 64rem) {
    p {
    text-align: center;
    margin: auto;
    }
  }
`
const StatsImage = styled.div`
display: inline-block;
background-color: ${({theme}) => theme.colors[700]};
border-radius: 0.25rem;
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
margin: .5rem;
position: relative;
padding: .5rem .5rem .0 .5rem;
img {
  max-width: 11.25rem !important;
}
`
const DivAds = styled.div`
margin: 4rem;
`

export {Main, Container, DivEarlyLate, DivBgImages, StyledCard, StatsImage, DivAds }
