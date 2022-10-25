import styled from 'styled-components'

const DivItens = styled.div`
margin: auto;
margin-top: 1rem;
order: 4;

@media (min-width: 64rem) {
margin: auto;
}
`
const Item = styled.img`
max-width: 50px;
margin: .0625rem .25rem;
@media (min-width: 80rem) {
  max-width: 70px;
}
`

const Items = ({items}) => {
  return (
  <>
    <DivItens>
      {items.map((item, index) => {
        return (
          <Item src={item.url} key={index}/>
        )
      })}
    </DivItens>
  </>
  )
}

export default Items;