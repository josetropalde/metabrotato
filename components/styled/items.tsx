import styled from 'styled-components'

const DivItens = styled.div`
margin-top: 1rem;
margin-left: 2rem;
order: 4;
@media (min-width: 64rem) {
margin: auto;
order: 3;
}
`
const Item = styled.img`
max-width: 80px;
margin: .0625rem .25rem;
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