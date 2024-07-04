import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import { PiNotePencilFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

function Author() {
    return (
        <div>
            <p className='text-lg'>
                Whether you have <span className='font-bold'>already published</span> with us or you are <span className='font-bold'>looking to publish</span> your book for the first time, we have resources available to help you on your publishing journey.
            </p>
            <div className='flex justify-between flex-col xl:flex-row  gap-5 mt-12'>
                <div>
                    <h1 className='border-b-2 border-gray-600 text-3xl pb-2'>Existing TRC Sapphire Publisher Authors</h1>
                    <li className='pt-3'>Find out about <span className='text-blue-900 font-bold'>how your book is being promoted</span></li>
                    <li className='pt-1'>Learn about our personal service for <span className='text-blue-900 font-bold'>purchasing copies of your book</span></li>
                    <li className='pt-1'>Join our <span className='text-gray-900 font-bold'>Featured Authors</span> programme / program</li>
                    <div className='text-[17px] text-blue-950 ml-5 mt-3'>
                        <p className='flex items-center gap-2'><FaSignInAlt/> Sign in to Featured Authors</p>
                        <p className='flex items-center gap-2'><PiNotePencilFill/> Register in the program</p>
                        <p className='flex items-center gap-2'><MdEmail/> Contact Featured Authors Support</p>
                    </div>
                </div>
                <div>
                    <h1 className='border-b-2 border-gray-600 text-3xl pb-2'>Looking to publish with TRC Sapphire Publisher?</h1>
                    <li className='pt-3 text-blue-950'>Discover the benefits of publishing with TRC Sapphire Publisher</li>
                    <li className='text-blue-950'>Find out more about the publishing process</li>
                    <li className='text-blue-950'>Download our publishing guidelines</li>
                    <li className='text-blue-950'>Explore the Author Directions Series</li>
                </div>

            </div>
        </div>
    )
}

export default Author