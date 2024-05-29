import React from 'react'
import { NavLink } from 'react-router-dom'

function StaticSlider() {

    const navbar = [
        {
            nav: 'Who We Serve',
            navlink: '/'
        },
        {
            nav: 'Knowedges',
            navlink: '/'
        },
        {
            nav: 'Services',
            navlink: '/'
        },
        {
            nav: 'News',
            navlink: '/'
        },
        {
            nav: 'About',
            navlink: '/'
        },
    ]

    return (
        <div className='lg:mt-28  text-black xl:gap-24 gap-10 md:px-24 sm:px-12 px-10 py-10 mx-auto relative flex flex-col-reverse lg:flex-row  items-start justify-between bg-gradient-to-r from-[#FFBE00] to-[#FFCF3F]'>
            <div className={`lg:w-[50%] xl:pl-5`}>
                <h1 className="xl:text-6xl font-semibold sm:text-5xl text-3xl">Getting savvy about media literacy</h1>
                <p className="xl:text-4xl sm:text-3xl text-xl mt-10 ">Navigating a shifting media landscape in the digital age</p>
                <div className="xl:mt-14 mt-10 flex justify-end"><button className="px-5 py-1 text-white rounded-full bg-[#A57C00] hover:bg-[#C09B30] transition duration-300 font-semibold">Read more</button></div>
            </div>
            <div className={`rounded-xl lg:w-[50%] pt-10`}>
                <div className='lg:flex flex-wrap gap-7 xl:justify-between items-center w-full mx-auto hidden'>
                    {
                        navbar.map((item, index) => <div className='group' key={index} ><NavLink className='text-black text-xl navLink font-semibold' to={item.navlink} >{item.nav}</NavLink>
                            <span className='w-0 rounded-lg mt-1 h-1 block transition-all duration-500 ease-in-out group-hover:w-full bg-black'></span>
                        </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default StaticSlider