import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DNavbar from './DNavbar'

function Dashboard() {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <div className='flex  flex-col md:flex-row md:gap-0 gap-10'>
      <div className={`${isTrue ? 'lg:w-[15%] md:w-[20%]': 'w-[0%] absolute'}`}><DNavbar isTrue={isTrue} setIsTrue={setIsTrue} /></div>
      <div className={`${isTrue ? 'lg:w-[85%] md:w-[80%]' : 'w-[97%] ml-auto'} md:p-5 p-3`}><Outlet /></div>
    </div>
  )
}

export default Dashboard