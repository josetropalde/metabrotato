import Image from 'next/image'
import { StructuredText } from 'react-datocms'
import styled from 'styled-components'
import { HoverInfo } from './sharedstyles'

const DivCharacter = styled.div`
  margin-left: 2rem;
  order: 2;
  @media (min-width: 64rem) {
    margin: 0 3rem;
  }

`

const CharacterImage =  styled.div`
 max-width: 50px ;
img {
  max-width: 50px !important;
}
@media (min-width: 64rem) {
  &:hover ${HoverInfo}{
    display: block;
    max-width: 300px;
  }
}
@media (min-width: 80rem) {
  max-width: 70px;
    img {
      max-width: 70px !important;
    }
  }
`
const SecondaryTitle =  styled.h2`
font-size: .875rem;
font-weight: normal;
text-align: center;
`

const Difficulty = styled.p`
display: block;
font-size: 12px;
color: ${({theme}) => theme.colors[300]};
max-width: 4.6875rem;
margin-top: .5rem;
text-align: center;
border-radius: .125rem;
background-color: ${({theme}) => theme.colors[500]};
position: relative;
span {
  position: absolute;
  bottom: -2.75rem;
  left: -1.75rem;
  margin: auto;
  background-color: ${({theme}) => theme.colors[500]};
  border-radius: .1875rem;
  font-size: .875rem;
  display: none;
  transition: .3s;
  width: 125px;
  padding: .5rem 0;
  z-index: 10;
}
&:hover span {
  display: block;
}
`
const Character = ({character, name, difficulty, allCharacters}) => {

  return (
  <>
    <DivCharacter>
      <CharacterImage>
        <Image src={character.url} alt={`Character: ${name}`} width={'80px'} height={'80px'}/>
        {allCharacters.map((item, index) => {
          return (
            allCharacters[index].characterImage[0].url == character.url ? 
            (
              <HoverInfo>
                <h2>{allCharacters[index].characterName}</h2>
                <StructuredText data={allCharacters[index].characterDescription.value} />
              </HoverInfo>
            ) : ''
          )
        })
      }
      </CharacterImage>
      <SecondaryTitle>{name}</SecondaryTitle>
      <Difficulty>
        {difficulty}
        <span>Difficulty Level</span>
      </Difficulty>

    </DivCharacter>
  </>
  )
}

export default Character;