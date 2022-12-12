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
import Weapons from './weapons'
import Votes from './votes'
import { useAuth } from '../../context/AuthContext'

const Card = styled.div`
  background-color: #57534E;
  padding: 1rem;
  border-radius: .25rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  @media(min-width: 64rem) {
    padding: 1.5rem;
  }
`
const Arrow = styled.img`
  max-width: 20px;
  cursor: pointer;
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
const TagNew = styled.div<{isNewTag?: string}>`
  position: absolute;
  left: -0.3125rem;
  border-radius: 50%;
  display: ${(props) => props.isNewTag};
  p {
    font-size: 1rem;
    font-weight: bold;
    color: #fb7185;
  }
  span {
    position: absolute;
    font-size: .875rem;
    display: none;
    background-color: ${({theme}) => theme.colors[500]};
    padding: .5rem;
    left: -1rem;
  }
  &:hover span {
    display: block;
  }
` 



const Cards = ({tier, isNew, difficulty,rank, cardID, allItems, allWeapons,allCharacters, name, character, weapons, itemsEarly, weaponsEarly, statsEarly, itemsLate,weaponsLate,statsLate}) => {
  const [infoActive, setInfoActive] = useState(false);
  const {user} = useAuth();

  let isNewTag: string;
  let display: string;
  
  useEffect(() => {
    if (window.innerWidth < 1024) {
      display = "block";
    } else {
      display = "flex";
    }
  }, []);

  if(isNew) {
    isNewTag = 'block'
  } else {
    isNewTag = 'none'
  }




  return (
    <>
      <Card>
        <TagNew isNewTag={isNewTag}><p>N</p><span>New!</span></TagNew>
        {rank ? '' : <Tier tier={tier} cardID={cardID}/>}
        <Character name={name} character={character} difficulty={difficulty} allCharacters={allCharacters}/>
        {rank ? user ? <Votes cardID={cardID}/> : '' : ''}
        <Weapons weapons={weapons} allWeapons={allWeapons}/>
        <Arrow onClick={()=> setInfoActive(!infoActive)} src="/angle-down-solid 1.png" alt="Open Card" style={{transform: infoActive ? 'rotate(180deg)' : 'none'}}/>
      </Card>

      <CardInfo style={{display: infoActive ? display : 'none'}}>
        <EarlyLateGame>
          <EarlyLateTitle>Early Game</EarlyLateTitle>
          <ItensEarly allItems={allItems} itemsEarly={itemsEarly} />
          <WeaponsEarly weaponsEarly={weaponsEarly} allWeapons={allWeapons}/>
          <StatsEarly statsEarly={statsEarly}/>
        </EarlyLateGame>
        <EarlyLateGame>
          <EarlyLateTitle>Late Game</EarlyLateTitle>
          <ItensLate allItems={allItems} itemsLate={itemsLate} />
          <WeaponsLate weaponsLate={weaponsLate} allWeapons={allWeapons}/>
          <StatsLate statsLate={statsLate}/>
        </EarlyLateGame>
      </CardInfo>
    </>
  )
}
export default Cards;