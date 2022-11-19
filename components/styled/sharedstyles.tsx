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
text-align: center;
`
const StickyAdLeft = styled.div`
display: none;
    @media (min-width: 75rem) {
      margin-top: .625rem;
    top: 6.25rem;
    left: 1rem;
    position: absolute;
    overflow: hidden;
    z-index: 997;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 250px;
    visibility: visible;
    }
    @media(min-width: 90rem) {
      left: 3rem;
    }
`
const StickyAdRight = styled.div`
display: none;
    @media (min-width: 75rem) {
      margin-top: .625rem;
    top: 6.25rem;
    right: 1rem;
    position: absolute;
    overflow: hidden;
    z-index: 997;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 250px;
    visibility: visible;
    }
    @media(min-width: 90rem) {
      right: 3rem;
    }
`

const InArticleAds = styled.div`
margin: 1rem auto;
text-align: center;
@media (min-width: 64rem) {
  ins:last-child {
    display: none !important;
  }
}
`
const HoverInfo = styled.div`
  display: none;
  position: absolute;
  z-index: -9999;
  visibility: hidden;
  overflow: hidden;
  width: 0;
  @media (min-width: 64rem) {
  position: absolute;
  visibility: visible;
  margin-top: .75rem;
  padding: 1rem;
  z-index: 100;
  font-size: .875rem;
  background-color: ${({theme}) => theme.colors[500]};
  text-align: start;
  width: unset;
  min-width: 180px;
  color: ${({theme}) => theme.colors[300]};
  &:hover {
    display: block;
  }
  h6 {
    font-size: 1rem;
  }
  }
`


export {Main, Container, DivEarlyLate, DivBgImages, StyledCard, StatsImage, DivAds, StickyAdLeft, StickyAdRight, InArticleAds, HoverInfo }




