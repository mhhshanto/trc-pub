import React from 'react'
import { Link } from 'react-router-dom'

function AboutNav() {

    const navbar = [
        {
            nav: 'Company',
            navlink: '/about/'
        },
        {
            nav: 'Our brands',
            navlink: '/about/our-brands'
        },
        {
            nav: 'Executive leadership team',
            navlink: '/about/executive-leadership-team'
        },
        {
            nav: 'Our history',
            navlink: '/'
        },
        {
            nav: 'Careers',
            navlink: '/'
        },
        {
            nav: 'Our policies',
            navlink: '/'
        },
        {
            nav: 'Corporate responsibility',
            navlink: '/'
        },
    ]


  return (
    <div className='bg-white py-3 shadow-xl px-5'>
        {
            navbar.map((item,index)=> {
                return(
                    <Link to={item?.navlink} key={index} className='block border-b text-nowrap px-5 transition duration-300 hover:text-yellow-600 py-2'>{item.nav}</Link>
                )
            })
        }
    </div>
  )
}

export default AboutNav