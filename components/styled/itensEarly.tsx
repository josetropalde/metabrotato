import Image from 'next/image'
import { DivBgImages, DivEarlyLate } from './sharedstyles'



const ItensEarly = ({itemsEarly}) => {
  return (
  <>
    <DivEarlyLate>
        {itemsEarly.map((item, index) => <DivBgImages key={index}><Image src={item.url} alt="Item Early" width={'90px'} height={'90px'}/></DivBgImages>)} 
    </DivEarlyLate>
  </>
  )
}

export default ItensEarly;