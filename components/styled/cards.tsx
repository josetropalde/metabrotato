import styled from 'styled-components'
import Tier from './tier'
import Character from './character'
import { useEffect, useState } from 'react'
import ItensEarly from './itensEarly'
import WeaponsEarly from './weaponsEarly'
import StatsEarly from './statsEarly'
import ItensLate from './itensLate'
import WeaponsLate from './weaponsLate'
import StatsLate from './statsLate'
import Items from './Weapons'
import Weapons from './Weapons'

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
  @media (min-width: 35.9375rem) {
  order: 4;
}
`
const CardInfo = styled.div`
  background-color: #57534E;
  border-radius: .25rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  cursor: pointer;
  @media (min-width: 64rem) {  
    display: flex;
    justify-content: space-between;
  }
`
const EarlyLateTitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  @media (min-width: 64rem) {
    font-size: 1.5rem;
  }
`
const EarlyLateGame = styled.div`
  width: 100%;
  padding: 2rem 5%;
    text-align: center;
  border: 1px solid ${({theme}) => theme.colors[500]};
  @media (min-width: 64rem) {  
    width: 50%;
  }
`

const Cards = ({tier, name, character, weapons, itemsEarly, weaponsEarly, statsEarly, itemsLate,weaponsLate,statsLate}) => {
  const [infoActive, setInfoActive] = useState(false);
  
  let display: string;

  useEffect(() => {
    if (window.innerWidth < 1024) {
      display = "block";
    } else {
      display = "flex";
    }
  }, []);

  return (
    <>
      <Card onClick={()=> setInfoActive(!infoActive)}>
        <Tier tier={tier}/>
        <Character name={name} character={character}/>
        <Weapons weapons={weapons}/>
        <Arrow src="/angle-down-solid 1.png" alt="" style={{transform: infoActive ? 'rotate(180deg)' : 'none'}}/>
      </Card>

      <CardInfo style={{display: infoActive ? display : 'none'}}>
        <EarlyLateGame>
          <EarlyLateTitle>Early Game</EarlyLateTitle>
          <ItensEarly itemsEarly={itemsEarly}/>
          <WeaponsEarly weaponsEarly={weaponsEarly}/>
          <StatsEarly statsEarly={statsEarly}/>
        </EarlyLateGame>
        <EarlyLateGame>
          <EarlyLateTitle>Late Game</EarlyLateTitle>
          <ItensLate itemsLate={itemsLate}/>
          <WeaponsLate weaponsLate={weaponsLate}/>
          <StatsLate statsLate={statsLate}/>
        </EarlyLateGame>
      </CardInfo>
    </>
  )
}
export default Cards;