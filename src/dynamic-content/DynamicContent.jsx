import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx';
import { IoMdMenu } from 'react-icons/io';
import UnderDynamic from './UnderDynamic';
import imgBanner from '../../public/bg-img.jpg'

function DynamicContent() {
  const {title} = useParams();
  const dynamicTitle = title.split('-');
  const targetDate = "2024-12-31T23:59:59";
  const {pathname} = useLocation()


  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className=" font-medium">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });


  const [isOpen, setIsOpen] = useState(false);

  const navbar = [
    {
      nav: 'Why publish with us',
      navlink: '/dynamicContent/title/home'
    },
    {
      nav: 'Submit your book proposal',
      navlink: `/dynamicContent/title/journalist-access`
    },
    {
      nav: 'The Publishing Process',
      navlink: `/dynamicContent/${title}/press-releases`
    },
    {
      nav: 'Publishing Guidelines',
      navlink: '/dynamicContent/title/publishing-guidelines'
    },
    // {
    //   nav: 'Support & Services',
    //   navlink: '/under-development'
    // },
    // {
    //   nav: 'Author Resources',
    //   navlink: '/under-development'
    // },
    // {
    //   nav: 'Author Affiliate Program',
    //   navlink: '/under-development'
    // },

  ]


  return (
    <div className='lg:mt-[110px] mt-16'>
      {/* timer here */}
      <div className='bg-amber-600 text-white flex flex-col items-center px-3 py-3'>
        <h1 className='md:text-2xl font-serif'>Buy 2 or more • <span className='font-semibold'>SAVE 25%</span> on all Books & eBooks • <span className='underline cursor-pointer'>Shop Now »</span></h1>
        <div className='px-3 text-sm md:text-base  py-1 rounded-md bg-white text-gray-800 mt-2'>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>

      <div className='md:container mx-auto px-3'>
        <img className='w-full h-60 mb-3' src={imgBanner} alt="" />

        <div className={`bg-white  lg:w-fit mb-5 relative  rounded-md`}>
          <div className='hidden grid-cols-4 gap-5 md:grid'>
            {
              navbar.map((item, index) => {
                return (
                  <div className={` px-4  py-3 text-center text-sm  hover:underline border rounded-md relative border-gray-300 ${pathname === item.navlink ? 'bg-amber-700 text-white' : 'text-amber-800 hover:bg-gray-100 hover:text-amber-600 '}`} key={index}>
                    <NavLink to={item?.navlink} >{item?.nav}</NavLink>
                    
                    {
                      pathname === item.navlink && <div className='bg-amber-700 left-0 right-0 mx-auto rotate-45 -bottom-[10px]  w-5 h-5 absolute'></div>
                    }
                  </div>
                )
              })
            }
          </div>

          <div onClick={() => setIsOpen(!isOpen)} className='flex justify-between items-center md:hidden py-2 px-3'>
            <button className=''>
              {
                isOpen ? <RxCross2 className='text-4xl font-bold text-black' /> : <IoMdMenu className='text-4xl font-bold text-black' />
              }

            </button>
            <h1 className='text-amber-700 font-medium underline'>{isOpen ? 'Close Newsroom Menu' : 'Open Newsroom Menu'}</h1>
          </div>

          <div className={`md:hidden ${isOpen ? '-translate-y-[0px]' : '-translate-y-[1100px]'} transition-all duration-300 py-5  block bg-[#FFBE00] z-[1] absolute w-full`}>
            <div>
              {
                navbar.map((item, index) => <div key={index}><NavLink className={`border-b ${index == 0 && 'border-t'} group hover:bg-[#ffcf3f] border-gray-600 block px-5 py-2 text-black text-xl navLink font-semibold`} onClick={() => setIsOpen(!isOpen)} to={item.navlink} >{item.nav}</NavLink>
                </div>)
              }
            </div>
          </div>

        </div>

        
        <Outlet/>
      </div>
    </div>
  )
}

export default DynamicContent