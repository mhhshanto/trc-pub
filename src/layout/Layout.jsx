import React from 'react'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../home/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";


function Layout() {
    const {pathname} = useLocation()

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <div className={`${pathname === '/' ? '' : 'lg:mt-36'}`}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout