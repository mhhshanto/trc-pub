import UnderBanner from './mainHomePageComponents/UnderBanner'
import TaylorSec from './mainHomePageComponents/TaylorSec'
import SubjectArea from './mainHomePageComponents/SubjectArea'
import StaticSlider from './mainHomePageComponents/StaticSlider'

function Home() {
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