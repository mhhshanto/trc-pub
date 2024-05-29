import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import { TiWorld } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

function MenuBar({ navbar }) {
    return (
        <div className='pb-3'>
            {
                navbar.map((item, index) => <div className='border-b hover:bg-[#ffcf3f] border-gray-600  px-5 py-2' key={index}><NavLink className='text-black text-xl navLink font-semibold' to={item.navlink} >{item.nav}</NavLink></div>)
            }


                <button className='flex text-black  text-base font-semibold border-b border-gray-600 px-5 py-2 hover:bg-[#ffcf3f] p-2 duration-300 transition-all justify-start gap-1 items-center w-full'><FaUser className='font-bold' />Careers</button>
                <button className='flex text-black  text-base font-semibold border-b border-gray-600 px-5 py-2 hover:bg-[#ffcf3f] p-2 duration-300 transition-all justify-start gap-1 items-center w-full'><TiWorld className='font-bold text-[18px]' />Regions</button>
           
            <div className={` transition-all duration-500 w-[90%] mx-auto flex p-[1px] my-2  justify-center items-center bg-white rounded-full overflow-hidden`}>
                <input type="text" name="" id="" className='border-none pl-5 pr-3 rounded-full outline-none w-full' />
                <button className='bg-[#a57c00] text-white hover:bg-[#c09b30] transition-all duration-300 p-2  rounded-full'><CiSearch className='text-xl font-bold' /></button>
            </div>

        </div>
    )
}

export default MenuBar