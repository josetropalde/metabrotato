import Image from 'next/image';
import { DivBgImages, DivEarlyLate } from './sharedstyles';



const WeaponsLate = ({weaponsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {weaponsLate.map((item, index) => <DivBgImages key={index}><Image src={item.url} alt="Weapons Late" width={'90px'} height={'90px'}/></DivBgImages>)}
    </DivEarlyLate>
  </>
  )
}

export default WeaponsLate;