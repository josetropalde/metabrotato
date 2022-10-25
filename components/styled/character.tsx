import styled from 'styled-components'

const DivCharacter = styled.div`
margin: 0 1.5rem;
order: 2;
`

const CharacterImage =  styled.img`
max-width: 2.5rem;
@media (min-width: 64rem) {
  max-width: 3.125rem;
}
`
const SecondaryTitle =  styled.h2`
font-size: .875rem;
font-weight: normal;
`


const Character = ({image, name}) => {
  return (
  <>
    <DivCharacter>
      <CharacterImage src={image} />
      <SecondaryTitle>{name}</SecondaryTitle>
    </DivCharacter>
  </>
  )
}

export default Character;