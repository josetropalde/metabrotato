import Image from 'next/image';
import { DivBgImages, DivEarlyLate } from './sharedstyles';






const WeaponsEarly = ({weaponsEarly}) => {
  return (
  <>
  <DivEarlyLate>
    {weaponsEarly.map((item, index) => <DivBgImages key={index}><Image src={item.url} alt="Weapon Early" width={'90px'} height={'90px'}/></DivBgImages>)}
  </DivEarlyLate>
  </>
  )
}

export default WeaponsEarly;