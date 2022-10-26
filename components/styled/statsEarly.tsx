import { useState } from 'react'
import styled from 'styled-components'
import { DivBgImages, DivEarlyLate, Item, StatsImage } from './sharedstyles'




const StatsEarly = ({statsEarly}) => {
  return (
  <>
  <DivEarlyLate>
    {statsEarly.map((item, index) => <DivBgImages key={index}><StatsImage src={item.url} /></DivBgImages>)}
  </DivEarlyLate>
  </>
  )
}

export default StatsEarly;