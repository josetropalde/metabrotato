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

const Itens = ({itens}) => {
  return (
  <>
    <DivItens>
      {itens.map((item, index) => {
        return (
          <Item src={item} key={index}/>
        )
      })}
    </DivItens>
  </>
  )
}

export default Itens;