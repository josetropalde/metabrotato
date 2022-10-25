import { DivEarlyLate, Item } from './sharedstyles';



const WeaponsLate = ({weaponsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {weaponsLate.map((item, index) => <Item src={item} key={index}/>)}
    </DivEarlyLate>
  </>
  )
}

export default WeaponsLate;