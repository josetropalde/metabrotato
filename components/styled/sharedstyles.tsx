import styled from 'styled-components'

const Main = styled.main`
  padding: 0 5%;
  margin-top: 10rem;
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
margin: 4rem 0;
text-align: center;
`
const StickyAdLeft = styled.div`
display: none;
    @media (min-width: 75rem) {
      margin-top: .625rem;
    top: 10rem;
    left: 1rem;
    position: fixed;
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
    top: 10rem;
    right: 1rem;
    position: fixed;
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

const AuthCard = styled.div`
background-color: ${({theme}) => theme.colors[600]};
width: 100%;
max-width: 37.5rem;
margin: 4rem auto;
margin-bottom: 14rem;
padding: 4rem 5%;
display: block;
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`
const AuthForm = styled.form`
`
const AuthTitle = styled.h1`
  padding: 0 5%;
  margin-top: 2rem;
  font-size: 2rem;
  text-align: center;
  @media (min-width: 64rem) {
    padding: 0;
    font-size: 2.5rem;
    margin-top: 4rem;
  }
`

const AuthInput = styled.input`
  display: block;
  width: 95%;
  padding: .75rem;
  margin: 1rem auto;
  border-radius: .5rem;
  border: none;
`
const AuthButton = styled.button<{themeColor: string, fontColor: string}>`
  display: block;
  width: 95%;
  margin: auto;
  margin-top: 1.5rem;
  background-color: ${({theme, themeColor}) => theme.colors[themeColor]};
  color: ${({fontColor}) => fontColor};
  border: none;
  padding: .5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
`
const AuthAnchor = styled.a<{themeColor: string, fontColor: string}>`
  display: inline-block;
  width: 45%;
  margin: .5rem auto;
  background-color: ${({theme, themeColor}) => theme.colors[themeColor]};
  color: ${({fontColor}) => fontColor};
  border: none;
  padding: .5rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  font-size: .875rem;
  @media (min-width: 64rem) {
    font-size: 1rem;
  }
  `


export {Main, Container, DivEarlyLate, DivBgImages, StyledCard, StatsImage, DivAds, StickyAdLeft, StickyAdRight, InArticleAds, HoverInfo, AuthCard, AuthForm, AuthInput, AuthButton, AuthAnchor, AuthTitle }




