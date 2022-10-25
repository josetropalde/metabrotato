import styled from 'styled-components'

const DivCharacter = styled.div`
  margin-left: 2rem;
  order: 2;
  @media (min-width: 64rem) {
    margin: 0 3rem;
  }
`

const CharacterImage =  styled.img`
max-width: 50px;
@media (min-width: 80rem) {
  max-width: 70px;
}
`
const SecondaryTitle =  styled.h2`
font-size: .875rem;
font-weight: normal;
`


const Character = ({character, name}) => {
  return (
  <>
    <DivCharacter>
      <CharacterImage src={character.url} />
      <SecondaryTitle>{name}</SecondaryTitle>
    </DivCharacter>
  </>
  )
}

export default Character;