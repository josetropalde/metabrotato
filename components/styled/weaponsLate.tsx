import { useState } from 'react'
import styled from 'styled-components'


const StyledTitle = styled.h2`
  padding: 0 5%;
  margin-top: 2rem;
  font-size: 2rem;
  @media (min-width: 64rem) {
    padding: 0;
    font-size: 2.5rem;
    margin-top: 4rem;
  }
`




const WeaponsLate = () => {
  return (
  <>
    <StyledTitle>Best Strategys</StyledTitle>
  </>
  )
}

export default WeaponsLate;