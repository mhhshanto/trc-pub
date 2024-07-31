import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {

    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <div>
            <div className='bg-[#ffbe00] text-black py-7'>
                <div className='container mx-auto flex lg:flex-row flex-col justify-between items-center gap-y-5'>
                    <div className='flex justify-center flex-wrap gap-y-2 items-center'>
                        <Link className='border-r-2 border-black px-3 text-sm hover:underline'>Contact</Link>
                        <Link className='border-r-2 border-black px-3 text-sm hover:underline'>Accessibility</Link>
                        {/* <Link to={'/careers'} className='border-r-2 border-black px-3 text-sm hover:underline'>Careers</Link> */}
                        <Link to={'/news'} className='border-r-2 border-black px-3 text-sm hover:underline'>News & Events</Link>
                        <Link className=' px-3 text-sm hover:underline'>Terms & Conditions</Link>
                    </div>
                    <div className='flex justify-center items-center text-3xl gap-3'>
                        <div><FaFacebookSquare /></div>
                        <div><FaInstagram /></div>
                        <div><FaSquareXTwitter /></div>
                        <div><FaLinkedin /></div>
                    </div>
                </div>
            </div>

            <div className='bg-[#333] py-10 text-white '>
                <div className='container mx-auto flex lg:flex-row flex-col-reverse px-2 lg:px-0 justify-between gap-y-6 lg:items-center'> 
                    <div>
                        <p>© {year} Informa UK Limited, an Informa Group Company.</p>
                        
                    </div>
                    <div className='lg:w-52 w-32 flex gap-2'>
                        <img src="../../public/fromImgBB/logoImg.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer