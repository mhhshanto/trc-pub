import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

function Careers() {

    const {pathname} = useLocation()
    

    const navbar = [
        {
            nav: 'About us',
            navlink: '/careers'
        },
        {
            nav: 'How we hire',
            navlink: '/careers/hire'
        },
        {
            nav: 'Our benefits',
            navlink: '/careers/benefits'
        },
        {
            nav: 'Our learning & development',
            navlink: '/careers/learn-development'
        },
        {
            nav: 'Our rewards & recognition',
            navlink: '/careers/rewards'
        },
        {
            nav: 'Diversity, equity & inclusion',
            navlink: '/careers/diversity'
        },

    ]

   useEffect(()=>{
         window.scrollTo(0,0)
   },[])

    return (
        <div>
            <div className='mt-16  text-black xl:gap-24 gap-10 md:px-24 sm:px-12 px-3 py-10 mx-auto relative flex flex-col-reverse lg:flex-row  items-center justify-between bg-gradient-to-r from-[#FFBE00] to-[#FFCF3F]'>
                <div className={`lg:w-[50%] xl:pl-5`}>
                    <h1 className="xl:text-6xl font-semibold sm:text-5xl text-3xl">Careers</h1>
                    <p className="xl:text-4xl sm:text-3xl font-medium text-xl mt-5 ">We are a global publishing company that believes in doing things differently.</p>
                    <div className="xl:mt-14 mt-10 flex justify-end"><button className="px-5 py-1 text-white rounded-full bg-[#A57C00] hover:bg-[#C09B30] transition duration-300 font-semibold">Search vacancies</button></div>

                </div>
                <div className={`rounded-xl lg:w-[50%] overflow-hidden pt-10`}>
                    <img className='w-full rounded-xl' src="https://taylorandfrancis.com/wp-content/uploads/2024/05/LD-Image-3.jpg" alt="" />
                </div>

            </div>

            <div className="md:container px-3 mx-auto my-16">
                <div className="md:border-b flex flex-wrap flex-col md:flex-row items-center gap-1 md:gap-[1px] border-gray-200">
                    {
                        navbar.map((item, index) => {
                            return (
                                <NavLink
                                    to={item?.navlink}
                                    key={index}
                                    
                                    className={` px-4 py-2 rounded-md md:rounded-t-md text-white font-medium md:w-fit w-full ${pathname === item?.navlink ? 'bg-[#ff5722] h-11' : 'bg-[#ff9800]'}`}
                                >
                                    <button className=''>{item?.nav}</button>
                                </NavLink>
                            )
                        })
                    }
                </div>

                <div className='mt-16'>
                   <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Careers