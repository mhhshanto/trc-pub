import React from 'react'
import { MdOutlineArrowCircleRight } from "react-icons/md";

function TaylorSec() {

    const data = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2022/03/f1000-homepage-22.jpg',
            title: 'Taylor & Francis Online'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2020/05/screenshot-tfe.jpg',
            title: 'Taylor & Francis eBooks'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2022/03/f1000-homepage-22.jpg',
            title: 'F1000'
        },
    ]


    return (
        <div className='mt-10 container mb-16 mx-auto 2xl:px-60 xl:px-40 lg:px-16 px-5'>

            {
                data.map((item, index) => <div className='mb-20' key={index}>
                    <div className={` flex md:flex-row flex-col md:gap-y-0 gap-y-5   ${index === 1 && 'md:flex-row-reverse'} justify-between`}>
                        <div className='md:w-[50%] w-full lg:p-12 px-2'>
                            <h1 className='text-3xl text-[#a57c00] font-normal hover:underline'>{item.title}</h1>
                            <p className='lg:text-xl text-base mt-5 mb-12 text-[#a57c00] '>Provides access to more than 2,700 high-quality, cross-disciplinary journals spanning Humanities and Social Sciences, Science and Technology, Engineering, Medicine and Healthcare.</p>
                            <div className='flex justify-center'><button><MdOutlineArrowCircleRight className=' text-[#a57c00] text-4xl font-semibold' /></button></div>
                        </div>
                        <div className={`md:w-[50%] w-full  ${index == 0 ? 'bg-[#ffbe00]' : index == 1 ? 'bg-[#007a96]' : 'bg-[#f2673c]'} p-3`}>
                            <img className='w-full h-full hover:scale-[1.03] transition-all duration-500' src={item.img} alt="" />
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default TaylorSec