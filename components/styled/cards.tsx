import styled from 'styled-components'
import Tier from './tier'
import Character from './character'
import Itens from './itens'
import { useState } from 'react'

const Card = styled.div`
  background-color: #57534E;
  padding: 1.5rem;
  border-radius: .25rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const Arrow = styled.img`
max-width: 20px;
order: 3;
@media (min-width: 64rem) {
float: none;
order: 4;
}
`
const CardInfo = styled.div`
  background-color: #57534E;
  padding: 1.5rem;
  border-radius: .25rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  cursor: pointer;
  @media (min-width: 64rem) {
    display: flex;
    justify-content: space-between;
  }
`
const EarlyGame = styled.div`
width: 50%;
`
const LateGame = styled.div`
width: 50%;
`

const Cards = ({tier, name, character, itens}) => {
  const [infoActive, setInfoActive] = useState(false);
  return (
    <>
      <Card onClick={()=> setInfoActive(!infoActive)}>
        <Tier tier={tier}/>
        <Character name={name} image={character}/>
        <Itens itens={itens}/>
        <Arrow src="/angle-down-solid 1.png" alt="" style={{transform: infoActive ? 'rotate(180deg)' : 'none'}}/>
      </Card>

      <CardInfo style={{display: infoActive ? 'flex': 'none'}}>
        <EarlyGame>
          <h2>Early Game</h2>

        </EarlyGame>
        <LateGame>
          <h2>Late Game</h2>
        </LateGame>
      </CardInfo>
    </>
  )
}
export default Cards;