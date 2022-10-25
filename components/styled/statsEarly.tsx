import { useState } from 'react'
import styled from 'styled-components'
import { DivEarlyLate, Item } from './sharedstyles'



const StatsEarly = ({statsEarly}) => {
  return (
  <>
  <DivEarlyLate>
    {statsEarly.map((item, index) => <Item src={item.url} key={index}/>)}
  </DivEarlyLate>
  </>
  )
}

export default StatsEarly;