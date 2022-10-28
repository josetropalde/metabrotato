import { useState } from 'react'
import styled from 'styled-components'


const StyledTier =  styled.div<{tierColor?: string}>`
  font-weight: bold;
  font-size: 1.5rem;
  width: 35px;
  height: 35px;
  text-align: center;
  border-radius: .25rem;
  order: 1;
  ${(props) => `background-color: ${props.tierColor}`}
`


const Tier = ({tier}) => {
  let tierColor: string;
  switch(tier) {
    case "A":
    tierColor = "#EF4444";
      break
    case "B":
    tierColor = "#F97316";
      break
    case "C":
    tierColor = "#EAB308";
      break
    case "D":
    tierColor = "#22c55e";
      break
  }
  return (
  <>
  <StyledTier tierColor={tierColor}>{tier}</StyledTier>
  </>
  )
}
export default Tier;