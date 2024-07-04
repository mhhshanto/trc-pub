import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutNav from './AboutNav'

function StaticSlider() {

    const navbar = [
        {
            nav: 'About',
            navlink: '/about'
        },
        {
            nav: 'Knowledge',
            navlink: '/knowledge'
        },
        {
            nav: 'Services',
            navlink: '/service'
        },
        {
            nav: 'News & Events',
            navlink: '/news'
        },
        {
            nav: 'Who We Serve',
            navlink: '/who-we-serve'
        },
        {
            nav: 'Contact Us',
            navlink: '/contact-us'
        },
        {
            nav: 'Summit',
            navlink: '/under-development'
        },
        {
            nav: 'Shop by Subject',
            navlink: '/shop-by-subject'
        },
    ]

    return (
        <div className='lg:mt-[110px]  text-black xl:gap-24 gap-10 md:px-24 sm:px-12 px-3 2xl:py-20 py-10  mx-auto relative flex flex-col-reverse lg:flex-row  items-start justify-between bg-gradient-to-r from-[#FFBE00] to-[#FFCF3F]'>
            <div className={`lg:w-[50%] xl:pl-5`}>
                <h1 className="xl:text-5xl font-semibold sm:text-5xl text-3xl">TRC Sapphire Publisher: Elevating Academic Excellence</h1>
                <p className="sm:text-2xl text-xl mt-10 ">Publishing a book is a significant milestone for any author, and choosing the right publisher can make all the difference. Here are ten compelling reasons why publishing your book with TRC Publisher could be a great choice</p>
                {/* <div className="xl:mt-14 mt-10 flex justify-end"><button className="px-5 py-1 text-white rounded-full bg-[#A57C00] hover:bg-[#C09B30] transition duration-300 font-semibold">Read more</button></div> */}
            </div>
            <div className={`rounded-xl lg:w-[50%] pt-10`}>
                <div className='lg:flex flex-wrap gap-9  xl:items-center w-full mx-auto hidden'>
                    {
                        navbar.map((item, index) => <div className='group relative' key={index} ><NavLink className='text-black xl:text-xl navLink font-semibold' to={item.navlink} >{item.nav}</NavLink>
                            <span className='w-0 rounded-lg mt-1 h-1 block transition-all duration-500 ease-in-out group-hover:w-full bg-black'></span>
                            {
                                item.nav === 'About' && 
                                <div className='group-hover:visible invisible absolute top-10 z-10 hover:transition duration-300'>
                                    <AboutNav/>
                                </div>
                            }
                        </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default StaticSlider