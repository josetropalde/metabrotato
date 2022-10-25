import { useState } from 'react'
import styled from 'styled-components'
import { DivBgImages, DivEarlyLate, Item } from './sharedstyles';






const WeaponsEarly = ({weaponsEarly}) => {
  return (
  <>
  <DivEarlyLate>
    {weaponsEarly.map((item, index) => <DivBgImages><Item src={item.url} key={index}/></DivBgImages>)}
  </DivEarlyLate>
  </>
  )
}

export default WeaponsEarly;