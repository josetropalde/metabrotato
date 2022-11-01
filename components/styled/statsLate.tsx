import Image from 'next/image';
import { DivBgImages, DivEarlyLate, StatsImage } from './sharedstyles'




const StatsLate = ({statsLate}) => {
  return (
  <>
    <DivEarlyLate>
      {statsLate.map((item, index) => <StatsImage key={index}><Image src={item.url} alt="Stats Early" width={'200px'} height={'120px'} /></StatsImage>)}
    </DivEarlyLate>
  </>
  )
}

export default StatsLate;