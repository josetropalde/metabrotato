import Image from 'next/image'
import styled from 'styled-components'

const DivItens = styled.div`
margin: auto;
margin-top: 1rem;
order: 4;

@media (min-width: 64rem) {
margin: auto;
}
`
const ItemImage = styled.div`
display: inline;
margin: .0625rem .25rem;
img {
  max-width: 3.125rem !important;
  @media (min-width: 80rem) {
    max-width: 4.375rem !important;
  }
}
`

const Item = ({items}) => {
  return (
  <>
    <DivItens>
      {items.map((item, index) => {
        return (
          <ItemImage key={index}>
            <Image src={item.url} alt='Character Best Item' width={'90px'} height={'90px'}/>
          </ItemImage>
        )
      })}
    </DivItens>
  </>
  )
}

export default Item;