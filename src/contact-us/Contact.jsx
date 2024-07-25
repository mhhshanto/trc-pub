import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri";
import { RxDoubleArrowRight } from "react-icons/rx";
import toast from 'react-hot-toast';


function Contact() {

    const navbar = [
        {
            nav: 'Contact us',
            navlink: '/under-development'
        },
        {
            nav: 'Advertising',
            navlink: '/under-development'
        },
        {
            nav: 'Customer Service',
            navlink: '/under-development'
        },
        {
            nav: 'Customer Service',
            navlink: '/under-development'
        },
        {
            nav: 'Journals editorial contacts',
            navlink: '/under-development'
        },
        {
            nav: 'Newsroom',
            navlink: '/under-development'
        },
        {
            nav: 'Rights & permissions',
            navlink: '/under-development',
            child: [
                {
                    nav: 'Books',
                    navlink: '/under-development'
                },
                {
                    nav: 'Journals Rights and Permissions',
                    navlink: '/under-development'
                },
            ]
        },
        {
            nav: 'Global office teams',
            navlink: '/under-development',
            child: [
                {
                    nav: 'Discover our Beijing Office',
                    navlink: '/under-development'
                },
                {
                    nav: 'Discover our Boca Raton office',
                    navlink: '/under-development'
                },
                {
                    nav: 'Discover our New Delhi office',
                    navlink: '/under-development'
                },
                {
                    nav: 'Discover our Cape Town Office',
                    navlink: '/under-development'
                },
                {
                    nav: 'Discover our Milton Park office',
                    navlink: '/under-development'
                },
                {
                    nav: 'Discover our Melbourne Office',
                    navlink: '/under-development'
                },
                {
                    nav: 'Discover our Singapore Office',
                    navlink: '/under-development'
                },
            ]
        },
        {
            nav: 'Global directory',
            navlink: '/under-development'
        },
    ]


    const copyToClipboard = () => {
        const text = document.getElementById('copyText').innerText;
        navigator.clipboard.writeText(text).then(() => {
          toast.success('Email copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      };


    return (
        <div className='lg:mt-[110px] mt-16'>
            <div className='bg-[url("https://taylorandfrancis.com/wp-content/uploads/2021/04/bg-world-4.jpg")] bg-cover bg-no-repeat '>
                <div className='bg-[#00000082]'>
                    <h1 className='pt-20 pb-5 text-3xl md:container px-3 text-white'>Contact us</h1>
                    <h1 className='py-7 flex  gap-1 items-center md:container px-3 text-white'><Link className='hover:underline' to={'/'}>Home</Link> <RiArrowRightSLine className='text-2xl' /> Contact us</h1>
                </div>
            </div>

            <div className='flex h-[40vh] justify-center items-center md:flex-row gap-5 sm:container mx-auto px-3 my-8'>
                <div className='bg-gray-100 px-10 rounded-md py-5'>
                    <h1 className='text-3xl mb-5 font-semibold text-center'>Our Mail Address</h1>
                    <p id='copyText' onClick={copyToClipboard} className='px-2 py-1 bg-white rounded-md font-semibold cursor-pointer'>info@trc-sapphirepublisher.com</p>
                </div>
                {/* <div className='md:w-[66%]'>

                    <h1 className='text-3xl border-gray-300 border-b pb-3  text-gray-700'>Headquarters</h1>
                    <p className='my-4'>If you have a general query please get in touch with us at HQ and we will be happy to help:</p>

                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='md:w-[50%]'>
                            <p>TRC Sapphire Publisher Group</p>
                            <p>4 Park Square</p>
                            <p>Milton Park</p>
                            <p>Abingdon</p>
                            <p>OX14 4RN</p>
                        </div>
                        <div className='md:w-[50%]'>
                            <p>UK: +44 (0) 20 805 20500</p>
                            <p>US: +1 (800) 354-1420</p>
                            <p>Email: enquiries@taylorandfrancis.com</p>
                            <p>Facebook: @TaylorandFrancisGroup</p>
                            <p>Twitter: @WeAreTandF</p>
                            <p>LinkedIn: TRC Sapphire Publisher Group</p>
                        </div>
                    </div>

                    <div className="mt-8 flex"><button className="px-5 py-1 text-white rounded-full bg-[#A57C00] hover:bg-[#C09B30] transition duration-300 font-semibold">Contact an office local to you</button></div>

                    <div className='flex flex-col md:flex-row gap-10 my-20'>
                        <div className='w-[50%]'>
                            <h1 className='my-5 text-2xl'>For Print Orders</h1>

                            <div>
                                <h1 className='text-xl my-3 font-medium'>In North, Central & South America</h1>
                                <p>+1 (800) 634-7064 (toll-free)</p>
                                <p className='text-blue-900 hover:underline'>orders@taylorandfrancis.com</p>
                            </div>
                            <div>
                                <h1 className='text-xl my-3 font-medium'>In Australia and New Zealand</h1>
                                <p>+61 2 8778 9999</p>
                                <p className='text-blue-900 hover:underline'>orders.logistics@xlexpress.com.au</p>
                            </div>
                            <div>
                                <h1 className='text-xl my-3 font-medium'>In the United Kingdom/Rest of World</h1>
                                <p>+44 (0) 1235 400524</p>
                                <p className='text-blue-900 hover:underline'>tandf@hachette.co.uk</p>
                            </div>

                        </div>
                        <div className='w-[50%]'>
                            <h1 className='my-5 text-2xl'>For eBook Orders</h1>

                            <div>
                                <h1 className='text-xl my-3 font-medium'>In North, Central & South America</h1>
                                <p>+1 (800) 354-1420 (toll-free)</p>
                                <p>+1 (215) 625-8900</p>
                                <p className='text-blue-900 hover:underline'>ebooksupport@tandfonline.com</p>
                            </div>
                            <div>
                                <h1 className='text-xl my-3 font-medium'>In the United Kingdom/Rest of World</h1>
                                
                                <p className='text-blue-900 hover:underline mt-3'>ebooksupport@tandfonline.com</p>
                            </div>
                        </div>
                    </div>

                </div> */}

                {/* <div className='md:w-[34%] border-t-[8px] border-yellow-500 h-fit bg-slate-100 px-5 py-8'>
                    {
                        navbar?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <NavLink to={item.navlink} className={`text-sm text-gray-700 mt-2 flex gap-2 hover:underline items-center`}
                                        style={({ isActive }) => {
                                            return isActive ? { textDecoration: "underline" } : {};
                                        }}>
                                        <RxDoubleArrowRight /> {item.nav}
                                    </NavLink>
                                    <div className='ml-7'>
                                        {
                                            item?.child?.map((childItem, childIndex) => {
                                                return (
                                                    <NavLink to={childItem?.navlink} className={`text-sm text-gray-700 mt-2 flex gap-2 hover:underline items-center`}
                                                        key={childIndex}>
                                                        <RiArrowRightSLine /> {childItem?.nav}
                                                    </NavLink>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div> */}
            </div>
        </div>
    )
}

export default Contact