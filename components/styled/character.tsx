import Image from 'next/image'
import styled from 'styled-components'

const DivCharacter = styled.div`
  margin-left: 2rem;
  order: 2;
  @media (min-width: 64rem) {
    margin: 0 3rem;
  }
`

const CharacterImage =  styled.div`
img {
  max-width: 50px !important;
  @media (min-width: 80rem) {
    max-width: 70px !important;
  }
}
`
const SecondaryTitle =  styled.h2`
font-size: .875rem;
font-weight: normal;
text-align: center;
`


const Character = ({character, name}) => {
  return (
  <>
    <DivCharacter>
      <CharacterImage>
        <Image src={character.url} alt={`Character: ${name}`} width={'80px'} height={'80px'}/>
      </CharacterImage>
      <SecondaryTitle>{name}</SecondaryTitle>
    </DivCharacter>
  </>
  )
}

export default Character;