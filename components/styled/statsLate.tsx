import { DivEarlyLate, Item } from './sharedstyles'




const StatsLate = ({statsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {statsLate.map((item, index) => <Item src={item.url} key={index}/>)}
    </DivEarlyLate>
  </>
  )
}

export default StatsLate;