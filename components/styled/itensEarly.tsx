import { useState } from 'react'
import styled from 'styled-components'
import { DivEarlyLate, Item } from './sharedstyles'



const ItensEarly = ({itemsEarly}) => {
  return (
  <>
    <DivEarlyLate>
      {itemsEarly.map((item: string, index: string) => <Item src={item} key={index}/>)} 
    </DivEarlyLate>
  </>
  )
}

export default ItensEarly;