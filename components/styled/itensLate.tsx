import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { DivBgImages, DivEarlyLate } from './sharedstyles'

const ItensLate = ({itemsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {itemsLate.map((item, index) => <DivBgImages key={index}><Image src={item.url} alt="Items Late" width={'90px'} height={'90px'}/></DivBgImages>)}
    </DivEarlyLate>
  </>
  )
}

export default ItensLate;