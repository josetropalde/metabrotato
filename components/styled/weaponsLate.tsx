import { DivBgImages, DivEarlyLate, Item } from './sharedstyles';



const WeaponsLate = ({weaponsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {weaponsLate.map((item, index) => <DivBgImages><Item src={item.url} key={index}/></DivBgImages>)}
    </DivEarlyLate>
  </>
  )
}

export default WeaponsLate;