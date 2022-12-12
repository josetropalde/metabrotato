import Image from 'next/image'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { HoverInfo } from './sharedstyles'

const DivItens = styled.div`
margin: auto;
margin-top: 1rem;
order: 4;

@media (min-width: 64rem) {
margin: auto;
}
`
const ItemImage = styled.div`
display: inline-block;
background-color: ${({theme}) => theme.colors[700]};
border-radius: 0.25rem;
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
position: relative;
margin: .0625rem .25rem;
img {
  max-width: 3.125rem !important;
  @media (min-width: 80rem) {
    max-width: 4.375rem !important;
  }
}
&:hover ${HoverInfo}{
    display: block;
  }
`

const Weapons = ({weapons, allWeapons}) => {
  return (
  <>
    <DivItens>
      {weapons.map((item, index) => {
        for(let i = 0; i < 100; i++) {
          if(allWeapons[i].weaponImage.url == item.url) { 
            return (
              <ItemImage key={index}>
                <Image src={item.url} alt='Character Best Item' width={'90px'} height={'90px'}/>
                <HoverInfo style={{display: allWeapons[i].weaponName ? '' : 'none'}}>
                  <h6>{allWeapons[i].weaponName}</h6>
                  <StructuredText data={allWeapons[i].weaponDescription.value} />
                </HoverInfo>
              </ItemImage>
            )
          }}
      })}
    </DivItens>
  </>
  )
}

export default Weapons;
