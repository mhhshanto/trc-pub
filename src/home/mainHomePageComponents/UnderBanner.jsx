import React from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { PiBookOpenTextThin } from "react-icons/pi";
import { GrPersonalComputer } from "react-icons/gr";

function UnderBanner() {

    const data = [
        {
            icon: <AiOutlineFileSearch />,
            title: 'Discover our Research',
            des: 'Access millions of peer-reviewed journal articles'
        },
        {
            icon: <PiBookOpenTextThin />,
            title: 'Discover our Research',
            des: 'Access millions of peer-reviewed journal articles'
        },
        {
            icon: <GrPersonalComputer />,
            title: 'Discover our Research',
            des: 'Reference-led content in specialist subject areas spanning the Humanities, Social Sciences, and STEM.'
        },
    ]


    const data2 = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/grid-authors.jpg',
            title: 'Discover',
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/grid-authors.jpg',
            title: 'Discover',
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/grid-authors.jpg',
            title: 'Discover',
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/grid-authors.jpg',
            title: 'Discover',
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/grid-authors.jpg',
            title: 'Discover',
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/grid-authors.jpg',
            title: 'Discover',
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/grid-authors.jpg',
            title: 'Discover',
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/grid-authors.jpg',
            title: 'Discover',
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/04/grid-authors.jpg',
            title: 'Discover',
        },

    ]



    return (
        <>
            <div className='my-10 container mx-auto 2xl:px-36 xl:px-10 px-3 flex lg:flex-row flex-col justify-between lg:gap-10  gap-5 '>
                <div className='xl:w-[35%] w-full'>
                    {
                        data.map((item, index) => <div className='p-6 flex gap-5 bg-[#ffbf003a] hover:bg-[#fdfdfd] transition-all duration-200 mb-[2px] justify-between' key={index}>
                            <div className='md:text-5xl text-4xl text-[#a57c00] font-semibold'>{item.icon}</div>
                            <div>
                                <h1 className='text-2xl text-[#a57c00] hover:underline font-bold'>{item.title}</h1>
                                <p>{item.des}</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className='xl:w-[65%] w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1'>
                    {
                        data2.map((item, index) => <div key={index} className='relative h-52 group cursor-pointer'>
                            <div className='absolute top-0 w-full h-full group-hover:h-[20%] group-hover:bg-[#ffbe00] transition-all duration-300  bg-gradient-to-t from-transparent to-[#ffbe00]'>
                                <h1 className='text-center font-semibold text-2xl text-black '>{item.title}</h1>
                            </div>

                            <img src={item.img} className='grayscale transition-all duration-300 group-hover:grayscale-0 w-full h-full -z-10 absolute top-0' alt="" />


                        </div>)
                    }

                </div>

            </div>

            <div className='bg-[#ffbf001c] py-14'>
                <div className='container mx-auto lg:px-28 md:px-10 px-5 '>
                    <h1 className='xl:text-5xl lg:text-4xl text-3xl  font-medium font-sans text-[#a57c00] text-center'>Content and Research Platforms</h1>
                    <p className='text-center lg:text-[1.6rem] text-base font-sans mt-14 text-[#a57c00]'>Taylor & Francis offers a range of content platforms to connect readers to knowledge. They are built around customer needs with the aim of facilitating discovery and allow users to access relevant research and information quickly and easily, wherever they are.</p>
                </div>
            </div>
        </>
    )
}

export default UnderBanner