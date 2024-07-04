import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ContextProvider } from '../auth/AuthProvider'
function Profile() {
    const location = useLocation()
    const {user} = useContext(ContextProvider)

    const routes = [
        {
            name: 'Shopper Profile',
            link: '/dashboard'
        },
        {
            name: 'Author Profile',
            link: '/dashboard/author'
        },
        {
            name: 'Instructor Profile',
            link: '/dashboard/instructor'
        },
    ]


    return (
        <div className='2xl:w-[95%] w-full mx-auto sm:my-10 flex lg:flex-row flex-col  gap-5'>
            <div className='xl:w-[25%]'>
                <h1 className='text-4xl font-serif text-center'>My Account</h1>
                <div className='bg-gray-100 px-3 py-7 flex flex-col items-center gap-y-4 mt-4 rounded-lg'>
                    <h1 className='text-[1.7rem] leading-4'>{user?.displayName}</h1>
                    <p className='text-lg'>{user?.email}</p>
                    <div className='flex justify-center items-center gap-3'>
                        <Button variant={'outline'} colorScheme='orange' size='sm'>Edit Account</Button>
                        <Button variant={'outline'} colorScheme='orange' size='sm'>Change Password</Button>
                    </div>
                </div>
            </div>
            <div className='xl:w-[75%]'>
                <div className='border-b border-gray-300 flex gap-5'>
                    {
                        routes.map((item, index) => {
                            return (
                                <Link to={item?.link} key={index} className={`sm:text-xl text-sm group block px-3 py-2 w-fit font-medium transition-all duration-300 border-t hover:underline hover:border-gray-300 border-x relative ${location.pathname === item.link ? 'border-gray-300' : 'border-white text-amber-700'} rounded-t-md`}>{item?.name} {
                                    item.link === location.pathname && <span className='bg-white h-1 absolute w-[100%] left-0 -bottom-[2px] block'></span>
                                }
                                    <span className="absolute w-[100%] left-0 -bottom-[2px] block bg-white h-1 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className='mt-10 md:px-8'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Profile