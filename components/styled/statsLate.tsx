import { DivBgImages, DivEarlyLate, Item } from './sharedstyles'




const StatsLate = ({statsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {statsLate.map((item, index) => <DivBgImages><Item src={item.url} key={index}/></DivBgImages>)}
    </DivEarlyLate>
  </>
  )
}

export default StatsLate;