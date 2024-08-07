// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BiSolidLogInCircle } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";
import MenuBar from './MenuBar';
import Modal from './mainHomePageComponents/Modal';
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useContext } from 'react';
import { ContextProvider } from '../auth/AuthProvider';
import { MdSpaceDashboard } from "react-icons/md";
import useGetRole from '../hooks/useGetRole';
import Aos from "aos";
import "aos/dist/aos.css";


function Navbar() {
    const [isTrue, setIsTrue] = useState(true)
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const { user } = useContext(ContextProvider);
    const [userRole] = useGetRole()
    const role = userRole?.role;
    const { pathname } = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



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
            nav: 'Submit Your Proposal',
            navlink: '/dynamicContent/title/journalist-access'
        },
        // {
        //     nav: 'Shop by Subject',
        //     navlink: '/shop-by-subject'
        // },
    ]

    useEffect(() => {
        Aos.init();
        
    }, []);


    return (
        <div  className={`bg-gradient-to-r from-[#ffb80e] from-[50%] to-[#f36f02] z-10 ${isOpen ? 'fixed' : 'fixed'} top-0 w-full ${scrollY ? 'md:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] shadow-gray-[#a6a6a62b] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] shadow-gray-[#a6a6a62b]' : 'md:shadow-none shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] shadow-gray-[#a6a6a62b]'} transition-all duration-300`}>
            <div >
                <div className='container px-3 md:pt-2 pt-4 mx-auto'>

                    <div className='lg:flex justify-end items-center hidden'>
                        <div className='w-[71.20%] flex justify-between gap-5 items-start'>
                            {/* <div className={` ${isTrue ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-all duration-500 w-[70%] flex p-[1px] justify-center items-center bg-white rounded-full overflow-hidden`}>
                            <input type="text" name="" id="" className='border-none pl-5 pr-3 rounded-full outline-none w-full' />
                            <button className='bg-blue-300 hover:bg-blue-400 transition-all duration-300 p-2  rounded-full'><CiSearch className='text-xl font-bold' /></button>
                        </div> */}
                            <div className='text-black text-sm font-semibold flex justify-end w-full items-center gap-3'>
                                <button onClick={() => setIsTrue(!isTrue)} className='flex hover:bg-[#C09B30] p-2 duration-300 transition-all rounded-md justify-center gap-1 items-center'><FaSearch className='font-bold' />Search</button>
                                {/* <Link to='/careers'>
                                <button className='flex justify-center gap-1 hover:bg-[#C09B30] p-2 duration-300 transition-all rounded-md items-center'><FaUser className='font-bold' />Careers</button>
                            </Link> */}
                                {/* <button className='flex justify-center gap-1 hover:bg-[#C09B30] p-2 duration-300 transition-all rounded-md items-center'><TiWorld className='font-bold text-[18px]' />Regions</button> */}

                                {
                                    user ?
                                        <Link to={role === 'admin' ? '/dashboard/post-blog' : '/dashboard'}>
                                            <button className='flex justify-center gap-1 hover:bg-[#C09B30] p-2 duration-300 transition-all rounded-md items-center'><MdSpaceDashboard className='font-bold text-[18px]' />Dashboard</button>
                                        </Link> :
                                        <>
                                            <Link to={'/login'}>
                                                <button className='flex justify-center gap-1 hover:bg-[#C09B30] p-2 duration-300 transition-all rounded-md items-center'><BiSolidLogInCircle className='font-bold text-[18px]' />Login</button>
                                            </Link>

                                            <Link to={'/register'}>
                                                <button className='flex justify-center gap-1 hover:bg-[#C09B30] p-2 duration-300 transition-all rounded-md items-center'><FaSignInAlt className='font-bold text-[18px]' />Create Account</button>
                                            </Link>
                                        </>

                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:container px-3 flex gap-3 flex-wrap justify-between items-center pb-4 mx-auto'>
                    <button className='lg:hidden block' onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? <RxCross2 className='text-4xl font-bold text-black' /> : <IoMdMenu className='text-4xl font-bold text-black' />
                        }

                    </button>
                    <Link  to={'/'}>
                        <img data-aos="fade-up" data-aos-duration="300" className='md:w-40 w-24 ' src="/fromImgBB/logoImg.png" alt="" />
                    </Link>
                    <div className='lg:flex justify-between items-center w-[50%] mx-auto hidden'>


                        <div className={` ${isTrue ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-500 w-full flex p-[1px] justify-center items-center bg-white rounded-full overflow-hidden`}>
                            <input type="text" name="" id="" className='border-none pl-5 pr-3 rounded-full outline-none w-full' />
                            <button className='bg-[#A57C00] hover:bg-[#C09B30]  transition-all duration-300 p-2  rounded-full'><CiSearch className='text-xl font-bold text-white' /></button>
                        </div>
                    </div>
                    {/* <button className='py-1 lg:px-4 md:px-4 px-2  hover:scale-105 bg-[#A57C00] hover:bg-[#C09B30] transition duration-300 rounded-full lg:text-base text-sm text-white font-semibold'>Publish with us</button> */}
                    <Modal />
                </div>

                <div  className={`lg:hidden z-10 ${isOpen ? '-translate-y-[0px]' : '-translate-y-[700px]'} transition-all duration-300  block bg-[#FFBE00] absolute w-full`}>
                    <MenuBar navbar={navbar} user={user} isOpen={isOpen} setIsOpen={setIsOpen} role={role} />
                </div>
            </div>
            {scrollY >= 300 && pathname === '/' ?
                <div data-aos="fade-up" data-aos-duration="300"  className='lg:flex  hidden  md:container mx-auto pb-2 justify-center gap-10 '>
                    {
                        navbar.map((item, index) => <div className={`transition-all duration-300 group`} key={index} ><NavLink className=' text-xl navLink font-bold' to={item.navlink} >{item.nav}</NavLink>
                            <span className='w-0 rounded-lg mt-1 h-1 block transition-all duration-500 ease-in-out group-hover:w-full  bg-black'></span>
                        </div>)
                    }
                </div> :
                pathname !== '/' ?
                <div className='lg:flex hidden  md:container mx-auto pb-2 justify-center gap-10 '>
                    {
                        navbar.map((item, index) => <div className={`transition-all duration-300 group`} key={index} ><NavLink className=' text-xl navLink font-bold' to={item.navlink} >{item.nav}</NavLink>
                            <span className='w-0 rounded-lg mt-1 h-1 block transition-all duration-500 ease-in-out group-hover:w-full  bg-black'></span>
                        </div>)
                    }
                </div> : ''
            }
        </div>
    )
}

export default Navbar 