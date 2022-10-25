import styled from 'styled-components'
import Tier from './tier'
import Character from './character'
import { useState } from 'react'
import ItensEarly from './itensEarly'
import WeaponsEarly from './weaponsEarly'
import StatsEarly from './statsEarly'
import ItensLate from './itensLate'
import WeaponsLate from './weaponsLate'
import StatsLate from './statsLate'
import Items from './items'

const Card = styled.div`
  background-color: #57534E;
  padding: 1rem;
  border-radius: .25rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media(min-width: 64rem) {
    padding: 1.5rem;
  }
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
  padding: 1rem;
  border-radius: .25rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  cursor: pointer;
  @media (min-width: 64rem) {  
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
`
const EarlyGame = styled.div`
width: 50%;
@media (min-width: 64rem) {  
  text-align: center;
}
`
const LateGame = styled.div`
width: 50%;
@media (min-width: 64rem) {  
  text-align: center;
}
`

const Cards = ({tier, name, character, items, itemsEarly, weaponsEarly, statsEarly, itemsLate,weaponsLate,statsLate}) => {
  const [infoActive, setInfoActive] = useState(false);
  console.log(items)
  return (
    <>
      <Card onClick={()=> setInfoActive(!infoActive)}>
        <Tier tier={tier}/>
        <Character name={name} character={character}/>
        <Items items={items}/>
        <Arrow src="/angle-down-solid 1.png" alt="" style={{transform: infoActive ? 'rotate(180deg)' : 'none'}}/>
      </Card>

      <CardInfo style={{display: infoActive ? 'flex': 'none'}}>
        <EarlyGame>
          <h2>Early Game</h2>
          <ItensEarly itemsEarly={itemsEarly}/>
          <WeaponsEarly weaponsEarly={weaponsEarly}/>
          <StatsEarly statsEarly={statsEarly}/>
        </EarlyGame>
        <LateGame>
          <h2>Late Game</h2>
          <ItensLate itemsLate={itemsLate}/>
          <WeaponsLate weaponsLate={weaponsLate}/>
          <StatsLate statsLate={statsLate}/>
        </LateGame>
      </CardInfo>
    </>
  )
}
export default Cards;