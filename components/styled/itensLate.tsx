import { useState } from 'react'
import styled from 'styled-components'
import { DivEarlyLate, Item } from './sharedstyles'

const ItensLate = ({itemsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {itemsLate.map((item, index) => <Item src={item.url} key={index}/>)}
    </DivEarlyLate>
  </>
  )
}

export default ItensLate;