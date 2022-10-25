import { useState } from 'react'
import styled from 'styled-components'
import { DivBgImages, DivEarlyLate, Item } from './sharedstyles'



const StatsEarly = ({statsEarly}) => {
  return (
  <>
  <DivEarlyLate>
    {statsEarly.map((item, index) => <DivBgImages key={index}><Item src={item.url} key={index}/></DivBgImages>)}
  </DivEarlyLate>
  </>
  )
}

export default StatsEarly;