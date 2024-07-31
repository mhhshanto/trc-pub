import React, { useEffect } from 'react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { PiBookOpenTextThin } from "react-icons/pi";
import { GrPersonalComputer } from "react-icons/gr";
import { FaDotCircle } from "react-icons/fa";
import { useState } from 'react';
import { storage } from '../../firebase.config';
import toast from 'react-hot-toast';
import Aos from "aos";
import "aos/dist/aos.css";


function UnderBanner() {
    const [image,setImage] = useState(null);

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
            img: '../../../public/fromImgBB/download.jpg',
            title: 'Academic Excellence',
        },
        {
            img: '../../../public/fromImgBB/download-1.jpg',
            title: 'Expertise in Academic Publishing',
        },
        {
            img: '../../../public/fromImgBB/download-2.jpg',
            title: 'Personalized Approach',
        },
        {
            img: '../../../public/fromImgBB/download-3.jpg',
            title: 'Quality Production',
        },
        {
            img: '../../../public/fromImgBB/download-4.jpg',
            title: 'Global Distribution Networks',
        },
        {
            img: '../../../public/fromImgBB/download-5.jpg',
            title: 'Professional Editorial Services',
        },
        {
            img: '../../../public/fromImgBB/download-6.jpg',
            title: 'Personalized Support',
        },
        {
            img: '../../../public/fromImgBB/download-7.jpg',
            title: 'Author Rights and Ownership',
        },
        {
            img: '../../../public/fromImgBB/download-8.jpg',
            title: 'Long-Term Partnership',
        },

    ]

    const upload = ()=> {
         console.log(image);
         const imageRef = storage.ref(`/images/${image.name}`).put(image).on("state change", toast('image uploaded successfully'), alert)
         imageRef();
    }

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            {/* <div>
                <input onChange={(e)=> setImage(e.target.files[0])} type="file" />
                <button className='bg-gray-300 mx-5 p-2' onClick={upload}>Upload</button>
            </div> */}
            <div   className='my-10 container mx-auto 2xl:px-36 xl:px-10 px-3 flex lg:flex-row flex-col justify-between lg:gap-10  gap-5 '>
                <div className='xl:w-[35%] w-full'>
                    <h1 className='text-3xl text-[#a57c00] mb-3 font-bold  text-center'>Core Values:</h1>
                    {
                        data.map((item, index) => <div data-aos="fade-up" data-aos-duration="1000" className='p-6 flex gap-5 bg-[#ffbf003a] hover:bg-[#fdfdfd] transition-all duration-200 mb-[2px] justify-between' key={index}>
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
                        data2.map((item, index) => <div data-aos='fade-left' data-aos-duration='1000' key={index} className='relative h-52 group cursor-pointer'>
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
                    <h1 className='xl:text-5xl lg:text-4xl text-2xl  font-medium font-sans text-[#a57c00] text-center'>TRC Sapphire Publisher: Elevating Academic Excellence</h1>
                    <p className='text-center lg:text-[1.6rem] text-base font-sans mt-14 text-[#a57c00] md:leading-10'><span className='font-bold'>Introduction:</span> We are pleased to introduce ourselves as a pioneering publisher dedicated to bridging the gap between academic research and global dissemination. Through a comprehensive survey spanning 900 universities worldwide, we have identified a significant disparity</p>

                    <div className=' lg:text-[1.6rem] text-base font-sans mt-14 text-[#a57c00] lg:w-[80%] w-full ml-auto  font-bold'>
                        <li className='flex  md:items-center gap-3'><FaDotCircle className='text-xl' /> Only 21% of theses and scientific studies are published.</li>
                        <li className='flex mt-4  md:items-center gap-3'><FaDotCircle className='text-xl' />Leaving 78% of valuable research unknown to the world.</li>
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