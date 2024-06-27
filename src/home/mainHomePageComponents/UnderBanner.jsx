import React from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { PiBookOpenTextThin } from "react-icons/pi";
import { GrPersonalComputer } from "react-icons/gr";
import { FaDotCircle } from "react-icons/fa";

function UnderBanner() {

    const data = [
        {
            icon: <AiOutlineFileSearch />,
            title: 'Excellence:',
            des: 'We uphold the highest standards of academic rigor and quality, ensuring that every publication meets the rigorous standards of scholarship and research.'
        },
        {
            icon: <PiBookOpenTextThin />,
            title: 'Integrity:',
            des: 'We operate with integrity and transparency, adhering to ethical publishing practices and maintaining the trust and respect of the academic community.'
        },
        {
            icon: <GrPersonalComputer />,
            title: 'Innovation:',
            des: 'We embrace innovation and creativity in scholarly publishing, leveraging digital technologies and multimedia formats to enhance the accessibility and impact of academic works.'
        },
    ]


    const data2 = [
        
        {
            img: 'https://i.ibb.co/bWCF7Gp/download.jpg',
            title: 'Academic Excellence',
        },
        {
            img: 'https://i.ibb.co/GMKBqN4/download-1.jpg',
            title: 'Expertise in Academic Publishing',
        },
        {
            img: 'https://i.ibb.co/2jpdJ3m/download-2.jpg',
            title: 'Personalized Approach',
        },
        {
            img: 'https://i.ibb.co/rMvfswN/download-3.jpg',
            title: 'Quality Production',
        },
        {
            img: 'https://i.ibb.co/Hgvmfkn/download-4.jpg',
            title: 'Global Distribution Networks',
        },
        {
            img: 'https://i.ibb.co/MgNG8WD/download-5.jpg',
            title: 'Professional Editorial Services',
        },
        {
            img: 'https://i.ibb.co/fQXfg5Q/download-6.jpg',
            title: 'Personalized Support',
        },
        {
            img: 'https://i.ibb.co/PCtFw14/download-7.jpg',
            title: 'Author Rights and Ownership',
        },
        {
            img: 'https://i.ibb.co/PrFhMf6/download-8.jpg',
            title: 'Long-Term Partnership',
        },

    ]



    return (
        <>
            <div className='my-10 container mx-auto 2xl:px-36 xl:px-10 px-3 flex lg:flex-row flex-col justify-between lg:gap-10  gap-5 '>
                <div className='xl:w-[35%] w-full'>
                    <h1 className='text-2xl mb-3 font-bold text-center'>Core Values:</h1>
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
                <div className='xl:w-[65%] mt-11 w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1'>
                    {
                        data2.map((item, index) => <div key={index} className='relative h-52 group cursor-pointer'>
                            <div className='absolute top-0 w-full h-full group-hover:h-[28%] group-hover:bg-[#ffbe00] transition-all duration-300  bg-gradient-to-t from-transparent to-[#ffbe00]'>
                                <h1 className='text-center font-semibold text-xl text-black '>{item.title}</h1>
                            </div>

                            <img src={item.img} className='grayscale transition-all duration-300 group-hover:grayscale-0 w-full h-full -z-10 absolute top-0' alt="" />


                        </div>)
                    }

                </div>

            </div>

            <div className='bg-[#ffbf001c] py-14'>
                <div className='container mx-auto lg:px-28 md:px-10 px-5 '>
                    <h1 className='xl:text-5xl lg:text-4xl text-2xl  font-medium font-sans text-[#a57c00] text-center'>TRC Sapphires Publisher: Elevating Academic Excellence</h1>
                    <p className='text-center lg:text-[1.6rem] text-base font-sans mt-14 text-[#a57c00] md:leading-10'><span className='font-bold'>Introduction:</span> We are pleased to introduce ourselves as a pioneering publisher dedicated to bridging the gap between academic research and global dissemination. Through a comprehensive survey spanning 900 universities worldwide, we have identified a significant disparity</p>

                    <div className=' lg:text-[1.6rem] text-base font-sans mt-14 text-[#a57c00] lg:w-[80%] w-full ml-auto  font-bold'>
                        <li className='flex  md:items-center gap-3'><FaDotCircle className='text-xl' /> Only 21% of theses and scientific studies are published.</li>
                        <li className='flex  md:items-center gap-3'><FaDotCircle className='text-xl' />Leaving 78% of valuable research unknown to the world.</li>
                    </div>

                    <div className='text-center lg:text-[1.6rem] text-base font-sans mt-14 text-[#a57c00] md:leading-10'>
                        Our extensive two-year survey has led us to a profound realization: the future of academia and policy making lies in nurturing young scholars, the leaders of tomorrow. With this in mind, we have embarked on a mission to empower and support emerging scholars in sharing their research with the world.
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnderBanner