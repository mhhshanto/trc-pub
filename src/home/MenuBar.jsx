import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import { TiWorld } from 'react-icons/ti'
import { NavLink, Link } from 'react-router-dom'
import AboutNav from './mainHomePageComponents/AboutNav'
import { BiSolidLogInCircle } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

function MenuBar({ navbar, isOpen, setIsOpen, user, role }) {
    return (
        <div className='pb-3'>
            {
                navbar.map((item, index) => <div className='border-b group hover:bg-[#ffcf3f] border-gray-600  px-5 py-2' key={index}><NavLink onClick={() => setIsOpen(!isOpen)} className='text-black text-xl navLink font-semibold' to={item.navlink} >{item.nav}</NavLink>
                    {
                        item.nav === 'About' &&
                        <div className='group-hover:visible invisible absolute top-10 z-10 hover:transition duration-300'>
                            <AboutNav isOpen={isOpen} setIsOpen={setIsOpen} />
                        </div>
                    }
                </div>)
            }


            <Link onClick={() => setIsOpen(!isOpen)} to={'/careers'}>
                <button className='flex text-black  text-base font-semibold border-b border-gray-600 px-5 py-2 hover:bg-[#ffcf3f] p-2 duration-300 transition-all justify-start gap-1 items-center w-full'><FaUser className='font-bold' />Careers</button>
            </Link>
            {
                user ?
                    <Link onClick={() => setIsOpen(!isOpen)} to={role === 'user' ? '/dashboard': '/dashboard/post-blog'}>
                        <button className='flex text-black  text-base font-semibold border-b border-gray-600 px-5 py-2 hover:bg-[#ffcf3f] p-2 duration-300 transition-all justify-start gap-1 items-center w-full'><MdSpaceDashboard  className='font-bold' />Dashboard</button>
                    </Link> :
                    <>
                        <Link onClick={() => setIsOpen(!isOpen)} to={'/login'}>
                            <button className='flex text-black  text-base font-semibold border-b border-gray-600 px-5 py-2 hover:bg-[#ffcf3f] p-2 duration-300 transition-all justify-start gap-1 items-center w-full'><FaSignInAlt className='font-bold' />Login</button>
                        </Link>
                        <Link onClick={() => setIsOpen(!isOpen)} to={'/register'}>
                            <button className='flex text-black  text-base font-semibold border-b border-gray-600 px-5 py-2 hover:bg-[#ffcf3f] p-2 duration-300 transition-all justify-start gap-1 items-center w-full'><BiSolidLogInCircle className='font-bold' />Create Account</button>
                        </Link>
                    </>
            }
            <button className='flex text-black  text-base font-semibold border-b border-gray-600 px-5 py-2 hover:bg-[#ffcf3f] p-2 duration-300 transition-all justify-start gap-1 items-center w-full'><TiWorld className='font-bold text-[18px]' />Regions</button>

            <div className={` transition-all duration-500 w-[90%] mx-auto flex p-[1px] my-2  justify-center items-center bg-white rounded-full overflow-hidden`}>
                <input type="text" name="" id="" className='border-none pl-5 pr-3 rounded-full outline-none w-full' />
                <button className='bg-[#a57c00] text-white hover:bg-[#c09b30] transition-all duration-300 p-2  rounded-full'><CiSearch className='text-xl font-bold' /></button>
            </div>

        </div>
    )
}

export default MenuBar