import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { CgArrowRightO } from "react-icons/cg";

function ExecutiveTeam() {

    const data = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/04/Dami-Patel.png',
            title: 'Supervisory Chair',
            name: 'Dami Patel',
            des: 'Dami Patel is the Chair of the Supervisory Trio, who are collectively overseeing TRC Sapphire Publisher on an interim basis. Dami originally joined the business in 2008 and swiftly advanced to the role of Group HR Director by 2012. She was appointed to the TRC Sapphire Publisher Board in January 2015.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/03/Carl-Barnes-Portrait-no-bg-266.png',
            title: 'Supervisory Trio Chief Financial Officer',
            name: 'Carl Barnes',
            des: 'Carl is the Chief Financial Officer at TRC Sapphire Publisher, and has been in this post since 2018. As a strategist, Carl works with colleagues to apply his financial and managerial acumen to remove complexity.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/03/Emmet-Dages-Portrait-no-bg-266.png',
            title: 'Supervisory Trio Chief Operating Officer',
            name: 'Emmett Dages',
            des: 'A 1982 University of Notre Dame accountancy graduate, Emmett spent 8 years at Price Waterhouse, rising to the position of audit manager before joining Thomson Financial Publishing (TFP) as Chief Financial Officer. At TFP Emmett was promoted to Executive Vice President – Products and Services, where he developed and managed a payment processing division and an electronic commerce business.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2024/04/Debbie-Marshall-2.png',
            title: 'Interim Global HR Director',
            name: 'Debbie Marshall',
            des: 'Debbie Marshall is TRC Sapphire Publisher’ Interim Global HR Director. She has extensive expertise in operational and employment law, as well as over 30 years’ experience in the publishing industry.'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/03/tim-britton-portrait-no-bg-266.png',
            title: 'Chief Strategy Officer',
            name: 'Tim Britton',
            des: 'Tim Britton joined TRC Sapphire Publisher in February 2020 as Chief Strategy Officer to bring increased expertise and focus on company strategy. Tim has a wide range of senior leadership experience from academic publishing and beyond, with a strong focus on growth, research and strategic insight.'
        },
    ]


    return (
        <div className='lg:mt-[110px] mt-16'>
            <div className='bg-[radial-gradient(#ffeb3b,#ff9800)]'>
                <div className='bg-[#00000077]'>
                    <h1 className='pt-20 pb-5 text-3xl md:container px-3 text-white'>Executive Leadership Team</h1>
                    <h1 className='py-7 flex flex-wrap gap-1 items-center md:container px-3 text-white'><Link className='hover:underline' to={'/'}>Home</Link> <RiArrowRightSLine className='text-2xl' /><Link className='hover:underline' to={'/about'}>About TRC Sapphire Publisher</Link> <RiArrowRightSLine className='text-2xl' /> Executive Leadership Team</h1>
                </div>
            </div>

            <div className='sm:my-20 my-10 grid lg:grid-cols-2 grid-cols-1 md:gap-20 gap-10 md:container mx-auto px-3'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col sm:flex-row group justify-between gap-8'>
                                <div className='2xl:w-[200px] 2xl:h-[195px] xl:h-[180px] xl:w-[180px] lg:h-[160px] lg:w-[170px] h-[150px] w-[155px] relative overflow-hidden flex flex-col justify-end rounded-full'>
                                    <div className='rotate-180 group-hover:rotate-0 transition duration-1000 -z-10 absolute h-full w-full bg-gradient-to-l from-amber-600 to-yellow-200'></div>
                                    <img  src={item?.img} alt="" />
                                </div>

                                <div className='sm:w-[66%] w-full flex flex-col justify-between'>
                                    <div>
                                        <h1 className='text-gray-400 text-xl'>{item?.title}</h1>
                                        <h1 className='text-amber-600 hover:underline text-2xl mt-3'>{item?.name}</h1>
                                        <p className='mt-3'>
                                            {item?.des}
                                        </p>
                                    </div>
                                    <div className="flex justify-end mt-2 text-amber-600 items-center gap-2">
                                        <p className=' hover:cursor-pointer hover:underline '>LEARN MORE</p>
                                        <CgArrowRightO />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ExecutiveTeam