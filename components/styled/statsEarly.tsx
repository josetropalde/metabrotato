import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { DivBgImages, DivEarlyLate, StatsImage } from './sharedstyles'




const StatsEarly = ({statsEarly}) => {
  return (
  <>
  <DivEarlyLate>
    {statsEarly.map((item, index) => <StatsImage key={index}><Image src={item.url} alt="Stats Early" width={'200px'} height={'120px'}/></StatsImage>)}
  </DivEarlyLate>
  </>
  )
}

export default StatsEarly;