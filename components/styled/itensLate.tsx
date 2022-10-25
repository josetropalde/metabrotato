import { useState } from 'react'
import styled from 'styled-components'
import { DivBgImages, DivEarlyLate, Item } from './sharedstyles'

const ItensLate = ({itemsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {itemsLate.map((item, index) => <DivBgImages><Item src={item.url} key={index}/></DivBgImages>)}
    </DivEarlyLate>
  </>
  )
}

export default ItensLate;