import Image from 'next/image';
import { StructuredText } from 'react-datocms';
import { DivBgImages, DivEarlyLate, HoverInfo } from './sharedstyles';






const WeaponsEarly = ({weaponsEarly, allWeapons}) => {
  return (
  <>
  <DivEarlyLate>
    {
    weaponsEarly.map((item, index) => {
      for(let i = 0; i < 45; i++) {
        if(allWeapons[i].weaponImage.url == item.url) {  
          return (
            <DivBgImages key={index}>
              <Image src={item.url} alt="Weapon Early" width={'90px'} height={'90px'}/>
              <HoverInfo>
                <h6>{allWeapons[i].weaponName}</h6>
                <StructuredText data={allWeapons[i].weaponDescription.value} />
              </HoverInfo>
            </DivBgImages>
          )
        }}
      
    })}
  </DivEarlyLate>
  </>
  )
}

export default WeaponsEarly;