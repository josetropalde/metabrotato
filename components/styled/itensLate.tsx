import Image from 'next/image'
import styled from 'styled-components'
import { DivBgImages, DivEarlyLate } from './sharedstyles'

const ItensHover = styled.div`
position: absolute;
background-color: red;
margin-top: .5rem;
z-index: 100;
display: none;
width: 9.375rem;
h6 {
font-size: 1rem;
}
`

const ItensLate = ({itemsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {itemsLate.map((item, index) => {

        
        return (
          <DivBgImages key={index}>
            <Image src={item.url} alt="Items Late" width={'90px'} height={'90px'}/>
          </DivBgImages>
        )
      })}
    </DivEarlyLate>
  </>
  )
}

export default ItensLate;