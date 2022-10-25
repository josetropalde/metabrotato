import { DivEarlyLate, Item } from './sharedstyles';



const WeaponsLate = ({weaponsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {weaponsLate.map((item, index) => <Item src={item.url} key={index}/>)}
    </DivEarlyLate>
  </>
  )
}

export default WeaponsLate;