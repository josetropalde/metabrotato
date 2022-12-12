import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"; 
import { useAuth } from '../../context/AuthContext';
import { db } from '../../config/firebase';
import { HoverInfo } from './sharedstyles';


const VotesDiv = styled.div`
margin-right: 1rem;
text-align: center;
z-index: 50;
`
const VoteUp = styled.span<{voted: boolean}>`
    width: 0; 
    height: 0; 
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    ${({voted}) => voted ? 'border-top: 12px solid #000;' : 'border-bottom: 12px solid #000;'}
  cursor: pointer;
    display: block;
    margin-bottom: .5rem;
    &:hover ${HoverInfo}{
    display: block;
    min-width: unset;
  } 
`


const Votes = ({cardID}) => {
  const {user} = useAuth();
  const [data, setData] = useState([]);
  const colRef = collection(db, "votes");

  useEffect(() => {
    const subscriber = onSnapshot(colRef, (snapshot) => {
      let getData = [];
      snapshot.forEach((doc) => {
        getData.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setData(getData);
    });

    return () => subscriber();
  }, []);
  
  let voted: boolean
  let numberOfVotes: number;
  let arrayOfCard = []
  let keys = []

  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length
  } 

  data.forEach((item, index) => {
    if(item.user == user.uid && item.card == cardID) {
      voted = true
    }
    if(item.card == cardID) {
      arrayOfCard.push(item.card)
      numberOfVotes = (getOccurrence(arrayOfCard, cardID))
    }
    keys.push([item.key, item.card, item.user])
  }) 
    
  const countVotesUp = async () => {
    await addDoc(collection(db, "votes"), {
      user: user.uid,
      card: cardID,
    })

  }
  const countVotesDown = async (index) => {
    keys.forEach(async (item) => {   
      if(item[1] == index.target.id && item[2] == user.uid) {
        await deleteDoc(doc(db, 'votes', item[0]))
      }
    })
  }
    
  return (
  <>
    <VotesDiv>
      <VoteUp id={cardID}  voted={voted} onClick={(index) => voted ? countVotesDown(index) : countVotesUp()}>
        <HoverInfo>{voted ? 'Vote Down' : 'Vote up'}</HoverInfo>
      </VoteUp>
      <span>{numberOfVotes}</span>
    </VotesDiv>
  </>
  )
}

export default Votes;