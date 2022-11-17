import Image from 'next/image'
import { StructuredText } from 'react-datocms'
import { DivBgImages, DivEarlyLate, HoverInfo } from './sharedstyles'

const ItensEarly = ({itemsEarly, allItems}) => {
  
   return (
  <>
    <DivEarlyLate>
        {itemsEarly.map((item, index) => { 
          for(let i = 0; i < 152; i++) {
            if(allItems[i].itemImage[0].url == item.url) {
              return (
                <DivBgImages key={index}>
                  <Image src={item.url} alt="Item Early" width={'90px'} height={'90px'}/>
                  <HoverInfo>
                    <h6>{allItems[i].itemName}</h6>
                    <StructuredText data={allItems[i].itemDescription.value} />
                  </HoverInfo>
                </DivBgImages>
              )
            }
          }
        })} 
    </DivEarlyLate>
  </>
  )
}

export default ItensEarly;