import { useState } from 'react'
import styled from 'styled-components'
import { DivEarlyLate, Item } from './sharedstyles';






const WeaponsEarly = ({weaponsEarly}) => {
  return (
  <>
  <DivEarlyLate>
    {weaponsEarly.map((item, index) => <Item src={item} key={index}/>)}
  </DivEarlyLate>
  </>
  )
}

export default WeaponsEarly;