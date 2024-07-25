import UnderBanner from './mainHomePageComponents/UnderBanner'
import TaylorSec from './mainHomePageComponents/TaylorSec'
import SubjectArea from './mainHomePageComponents/SubjectArea'
import StaticSlider from './mainHomePageComponents/StaticSlider'
import { useEffect } from 'react'

function Home() {

  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <StaticSlider />
      <UnderBanner />
      <TaylorSec />
      <SubjectArea />
    </div>
  )
}

export default Home