import { DivBgImages, DivEarlyLate, StatsImage } from './sharedstyles'




const StatsLate = ({statsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {statsLate.map((item, index) => <DivBgImages key={index}><StatsImage src={item.url} /></DivBgImages>)}
    </DivEarlyLate>
  </>
  )
}

export default StatsLate;