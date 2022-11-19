import Image from 'next/image';
import { StructuredText } from 'react-datocms';
import { DivBgImages, DivEarlyLate, HoverInfo } from './sharedstyles';



const WeaponsLate = ({weaponsLate, allWeapons}) => {
  return (
  <>
    <DivEarlyLate>
      {weaponsLate.map((item, index) => {
        for(let i = 0; i < 100; i++) {
          if(allWeapons[i].weaponImage.url == item.url) {  
            return (
              <DivBgImages key={index}>
                <Image src={item.url} alt="Weapons Late" width={'90px'} height={'90px'}/>
                <HoverInfo style={{display: allWeapons[i].weaponName ? '' : 'none'}}>
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

export default WeaponsLate;