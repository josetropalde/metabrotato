import { useState } from 'react'
import styled from 'styled-components'
import { DivEarlyLate, Item } from './sharedstyles'



const ItensEarly = ({itemsEarly}) => {
  return (
  <>
    <DivEarlyLate>
      {itemsEarly.map((item, index) => <Item src={item.url} key={index}/>)} 
    </DivEarlyLate>
  </>
  )
}

export default ItensEarly;