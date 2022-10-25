import { useState } from 'react'
import styled from 'styled-components'
import { DivBgImages, DivEarlyLate, Item } from './sharedstyles'



const ItensEarly = ({itemsEarly}) => {
  return (
  <>
    <DivEarlyLate>
        {itemsEarly.map((item, index) => <DivBgImages key={index}><Item src={item.url} key={index}/></DivBgImages>)} 
    </DivEarlyLate>
  </>
  )
}

export default ItensEarly;