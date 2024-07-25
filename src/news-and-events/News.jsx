import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import UnderNews from './UnderNews';
import { RxCross2 } from 'react-icons/rx';
import { IoMdMenu } from 'react-icons/io';
import bannerImg from '../../public/submit_icons/newsBannerImg.jpg'


function News() {

    const [isOpen, setIsOpen] = useState(false);

    const navbar = [
        {
            nav: 'Home',
            navlink: '/news'
        },
        // {
        //     nav: 'Journalist Access',
        //     navlink: '/under-development'
        // },
        // {
        //     nav: 'Press releases',
        //     navlink: '/under-development'
        // },
        // {
        //     nav: 'Guidance for Authors',
        //     navlink: '/under-development'
        // },
        // {
        //     nav: 'Guidance for Press Officers',
        //     navlink: '/under-development'
        // },
        // {
        //     nav: 'Press Office Contacts',
        //     navlink: '/under-development'
        // },

    ]

    useEffect(()=>{
        window.scrollTo(0,0)
  },[])

    return (
        <div className='lg:mt-[110px] mt-16'>
            {/* <div style={{backgroundImage: `url("${bannerImg}")`}} className='bg-cover object-cover bg-no-repeat '>
                <div className='bg-[#091a7999] text-white lg:px-20 px-3  xl:w-[45%] md:w-[75%] w-[90%] lg:w-[65%] mx-auto flex flex-col gap-y-4'>
                    <h1 className='md:pt-20 pt-10 pb-5 text-3xl md:container  text-white text-center font-medium'>Welcome to the Newsroom</h1>
                    <p className='font-medium text-lg text-center'>Bringing you breaking research that develops practice, impacts policy, and drives change that resonates around the world.</p>
                    <p className='text-center'>Our press releases include book publication announcements and research news in every subject within medicine, science, arts, and humanities, from every corner of the globe, together with the latest corporate news updates.</p>
                    <p className='text-center'>Follow us on social media:</p>

                    <div className='flex justify-center items-center gap-5 text-4xl mt-5 mb-10'>
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaXTwitter />
                        <BsInstagram />
                    </div>
                </div>
            </div> */}
            <div className={`bg-gray-200 relative border-b-amber-600 border-b-[3px]`}>
                <div className='md:container mx-auto px-3 md:flex hidden justify-start items-center gap-1'>
                    {
                        navbar.map((item, index) => {
                            return (
                                <div className={`px-4  group py-5 text-amber-800 lg:text-lg  font-medium hover:text-amber-600 underline border-r-2 relative border-white`} key={index}>
                                    <NavLink to={item?.navlink} >{item?.nav}</NavLink>
                                    <div className='absolute top-0 h-[6px] group-hover:w-[100%]  w-[0%] mx-auto right-0  transition-all duration-300  bg-amber-500 left-0 '></div>
                                </div>
                            )
                        })
                    }
                </div>

                <div onClick={() => setIsOpen(!isOpen)} className='flex justify-between items-center md:hidden py-2 px-3'>
                    <button className=''>
                        {
                            isOpen ? <RxCross2 className='text-4xl font-bold text-black' /> : <IoMdMenu className='text-4xl font-bold text-black' />
                        }

                    </button>
                    <h1 className='text-amber-700 font-medium underline'>{isOpen ? 'Close Newsroom Menu' : 'Open Newsroom Menu'}</h1>
                </div>

                <div className={`md:hidden ${isOpen ? '-translate-y-[0px]' : '-translate-y-[1100px]'} transition-all duration-300 py-5  block bg-[#FFBE00] z-[1] absolute w-full`}>
                    <div>
                        {
                            navbar.map((item, index) => <div key={index}><NavLink className={`border-b ${index == 0 && 'border-t'} group hover:bg-[#ffcf3f] border-gray-600 block px-5 py-2 text-black text-xl navLink font-semibold`} onClick={() => setIsOpen(!isOpen)} to={item.navlink} >{item.nav}</NavLink>
                            </div>)
                        }
                    </div>
                </div>

            </div>
            <UnderNews />
        </div>
    )
}

export default News