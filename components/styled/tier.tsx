import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { db } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';


const StyledTier =  styled.div<{tierColor?: string}>`
  font-weight: bold;
  font-size: 1.5rem;
  width: 35px;
  height: 35px;
  text-align: center;
  border-radius: .25rem;
  display: block;
  order: 1;
  ${(props) => `background-color: ${props.tierColor}`}
`


const Tier = ({tier, cardID}) => {

  const [data, setData] = useState([]);
  const colRef = collection(db, "votes");
  const {user} = useAuth();

  useEffect(() => {
    const subscriber = onSnapshot(colRef, (snapshot) => {
      let getData = [];
      snapshot.forEach((doc) => {
        getData.push({
          ...doc.data()
        });
      });
      setData(getData);
    });

    return () => subscriber();
  }, []);
  
  let numberOfVotes;
  let arrayOfCard = []
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length
  } 
 

  data.forEach((item, index) => {
    if(item.card == cardID) {
      arrayOfCard.push(item.card)
      numberOfVotes = getOccurrence(arrayOfCard, cardID)
    }
  })


  let tierColor: string;
  let rank: string;
  
  if(numberOfVotes > (numberOfVotes * 0.25)) {
    rank = "A"
  }
  if(numberOfVotes > (numberOfVotes * 0.25)) {
    rank = "B"
  }
  if(numberOfVotes > (numberOfVotes * 0.25)) {
    rank = "C"
  }
  if(numberOfVotes > (numberOfVotes * 0.25)) {
    rank = "D"
  }
  
  switch(tier) {
    case "A":
    tierColor = "#EF4444";
      break
    case "B":
    tierColor = "#F97316";
      break
    case "C":
    tierColor = "#EAB308";
      break
    case "D":
    tierColor = "#22c55e";
      break
  }
  return (
  <>
  <StyledTier tierColor={tierColor}>{tier}</StyledTier>
  </>
  )
}
export default Tier;