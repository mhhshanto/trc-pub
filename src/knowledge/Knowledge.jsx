import React from 'react'
import UnderKnowledge from './UnderKnowledge'

function Knowledge() {
  return (
    <>
      <div className='mt-16  text-black xl:gap-24 gap-10 md:px-24 sm:px-12 px-3 py-10 mx-auto relative flex flex-col-reverse lg:flex-row  items-center justify-between bg-gradient-to-r from-[#FFBE00] to-[#FFCF3F]'>
        <div className={`lg:w-[50%] xl:pl-5`}>
          <h1 className="xl:text-6xl font-semibold sm:text-5xl text-3xl">Knowledge</h1>
          <p className="xl:text-4xl sm:text-3xl font-medium text-xl mt-5 ">We are proud to publish cutting-edge research across a wide range of subjects and specialties.</p>

        </div>
        <div className={`rounded-xl lg:w-[50%] overflow-hidden pt-10`}>
          <img className='w-full rounded-xl' src="https://taylorandfrancis.com/wp-content/uploads/2024/05/Knowledge-page-art.jpg" alt="" />
        </div>

      </div>
      <UnderKnowledge />
    </>
  )
}

export default Knowledge