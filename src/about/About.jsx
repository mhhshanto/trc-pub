import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri";
import { RxDoubleArrowRight } from "react-icons/rx";
import bgImg from './../../public/WhatsApp Image 2024-07-08 at 22.02.38_a4bb564b.jpg'

function About() {

    const navbar = [
        {
            nav: 'Company',
            navlink: '/about/'
        },
        // {
        //     nav: 'Our brands',
        //     navlink: '/about/our-brands'
        // },
        {
            nav: 'Executive leadership team',
            navlink: '/about/executive-leadership-team'
        },
        // {
        //     nav: 'Our history',
        //     navlink: '/under-development'
        // },
        // {
        //     nav: 'Careers',
        //     navlink: '/careers'
        // },
        // {
        //     nav: 'Our policies',
        //     navlink: '/under-development'
        // },
        // {
        //     nav: 'Corporate responsibility',
        //     navlink: '/under-development'
        // },
    ]

    const data = [
        {
            title: 'Academic Excellence',
            des: 'TRC Publisher is dedicated to upholding the highest standards of academic rigor and quality, ensuring that your book meets the rigorous standards of scholarship and research.'
        },
        {
            title: 'Expertise in Academic Publishing',
            des: 'With years of experience in academic publishing, TRC Publisher understands the unique needs and challenges of scholars and researchers, providing expert guidance and support throughout the publishing process.'
        },
        {
            title: 'Personalized Approach',
            des: `They offer a personalized approach to publishing, taking the time to understand each author's unique vision and goals for their academic book.`
        },
        {
            title: 'Quality Production',
            des: 'TRC Publisher is committed to producing high-quality books, ensuring that every aspect of the publishing process, from editing to design, meets the highest standards.'
        },
        {
            title: 'Global Distribution Networks',
            des: `With extensive distribution networks, including academic libraries, bookstores, and online platforms, TRC Publisher ensures that your book reaches a global audience of scholars, researchers, and students. They provide comprehensive marketing support, helping authors promote their books through various channels, including social media, book signings, and author events`
        },
        {
            title: 'Professional Editorial Services',
            des: `TRC Publisher provides professional editorial services, including copyediting, formatting, and indexing, to ensure clarity, coherence, and precision in your academic writing. TRC Publisher employs a rigorous peer review process to ensure the quality and credibility of your academic work, maintaining the integrity of scholarly research and enhancing its academic impact.`
        },
        {
            title: 'Personalized Support',
            des: `TRC Publisher offers personalized support and guidance to authors, providing strategic advice on manuscript development, publication strategies, and academic career advancement.`
        },
        {
            title: 'Author Rights and Ownership',
            des: `TRC Publisher respects author rights and ownership, allowing you to retain control over your intellectual property and ensuring that your academic work is protected and respected. TRC Publisher respects author rights and ownership, allowing you to retain control over your intellectual property and ensuring that your academic work is protected and respected.`
        },
        {
            title: 'Long-Term Partnership',
            des: `TRC Publisher views the author-publisher relationship as a long-term partnership, providing ongoing support and opportunities for authors beyond the initial publication of their book. TRC Publisher is committed to making a positive impact on academia and society by disseminating innovative research, critical insights, and educational resources that advance knowledge and address pressing societal challenges.`
        },
        {
            title: 'Commitment to Impactful Research',
            des: `By partnering with TRC Publisher, corporate entities demonstrate a commitment to producing impactful research and contributing to the advancement of knowledge within their industries, fostering innovation and growth.`
        },
    ]


    return (
        <div className='lg:mt-[110px] mt-16'>
            <div className='bg-[url("https://taylorandfrancis.com/wp-content/uploads/2022/09/header-about-us.jpeg")] bg-cover bg-no-repeat '>
                <div className='bg-[#00000082]'>
                    <h1 className='pt-20 pb-5 text-3xl md:container px-3 text-white'>About TRC Sapphire Publisher</h1>
                    <h1 className='py-7 flex  gap-1 items-center md:container px-3 text-white'><Link className='hover:underline' to={'/'}>Home</Link> <RiArrowRightSLine className='text-2xl' /> About TRC Sapphire Publisher</h1>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row gap-5 sm:container mx-auto px-3 my-8'>
                <div className='md:w-[66%]'>
                    <p className='font-bold text-2xl text-gray-700'>TRC Sapphire Publisher is one of the world’s leading academic publishers – and one of its most enduring.</p>
                    <p className='mt-5 text-gray-700 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md'><span className='font-bold'>TRC Sapphire Publisher</span> stands as a cornerstone in the academic publishing realm, dedicated to advancing knowledge, fostering critical thinking, and amplifying scholarly discourse. With a steadfast commitment to academic excellence, integrity, and innovation, TRC Sapphire Publisher serves as a trusted partner for academics, researchers, and institutions worldwide.</p>

                    <h1 className='mt-14 rounded  md:text-3xl text-2xl font-bold  bg-black w-fit text-amber-300 px-2 pb-1'>Mission Statement:</h1>

                    {/* <div className='mt-5'>
                   <li className='mt-3'>Our mission at TRC Sapphire Publisher is to facilitate the dissemination of cutting-edge research, scholarly insights, and educational resources that shape the future of academia and society. </li>
                   <li className="mt-3">We are driven by a passion for knowledge and a commitment to empowering scholars to make meaningful contributions to their fields.</li>
                   <li className="mt-3">Publishing a book is a significant milestone for any author, and choosing the right publisher can make all the difference.</li>
                   <li className="mt-3">Converting a thesis into a book is a significant endeavor that requires careful planning, restructuring, and refining to adapt the content for a broader audience and publication format</li>
                   </div> */}
                    <div className='mt-5 grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-3'>
                        <div style={{ backgroundImage: `url("${bgImg}")` }} className='mt-3 px-10 py-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md text-gray-300 font-semibold'>Our mission at TRC Sapphire Publisher is to facilitate the dissemination of cutting-edge research, scholarly insights, and educational resources that shape the future of academia and society. </div>
                        <div className='mt-3 px-10 py-7 font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md'>We are driven by a passion for knowledge and a commitment to empowering scholars to make meaningful contributions to their fields.</div>
                        <div className='mt-3 px-10 font-semibold py-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md'>Publishing a book is a significant milestone for any author, and choosing the right publisher can make all the difference.</div>
                        <div style={{ backgroundImage: `url("${bgImg}")` }} className='mt-3 px-10 py-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md text-gray-300 font-semibold'>Converting a thesis into a book is a significant endeavor that requires careful planning, restructuring, and refining to adapt the content for a broader audience and publication format</div>
                    </div>

                    <h1 className='mt-28 rounded  md:text-3xl text-2xl font-bold  bg-black w-fit text-amber-300 px-3 pb-1'>Why Choose TRC Sapphire Publisher:</h1>
                    <p className='mt-5 text-gray-700 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md text-center'>
                        Publishing an academic book is a significant milestone in any scholar's career, and choosing the right publisher is crucial for maximizing the impact and visibility of your work.
                    </p>



                    <p className='font-bold mt-5 text-gray-700 text-xl'>Here are 10 compelling reasons why you should consider publishing your academic book with TRC Publisher:</p>

                    <div className='mt-5 mb-10'>


                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className='flex gap-4 mt-10'>
                                        <div className='bg-gray-800 px-3 py-[5px] rounded text-gray-100 text-xl h-fit w-fit font-bold'>{index+1}</div>
                                        <div>
                                            <h1 className='text-2xl mb-3 font-bold'>{item?.title}</h1>
                                            <p className=''>{item?.des}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }




                    </div>

                    <p className='mt-5 text-gray-700 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md'>
                        At TRC Sapphire Publisher, we believe that academic publishing is not just about disseminating knowledge but also about inspiring intellectual curiosity, fostering interdisciplinary dialogue, and shaping the future of scholarship. Join us in our mission to elevate academic excellence and contribute to the advancement of knowledge and understanding in every field of study.
                    </p>

                    <h1 className='mt-20 rounded  md:text-3xl text-2xl font-bold  bg-black w-fit text-amber-300 px-2 pb-1'>A commitment to people and knowledge</h1>
                    <p className='font-bold mt-5 text-gray-700 text-xl'>Knowledge empowers people to think, do, and be more than they ever could before.</p>
                    <p className='mt-5 text-gray-700'>As a global publishing company that believes in making top quality research accessible to more people all around the world, we strive to:</p>
                    <div className='ml-5 mt-4 gap-5 font-medium grid xl:grid-cols-3  grid-cols-1'>
                        <div className=' text-gray-700 px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md'>bring together diverse people, ideas and opinions to publish the experts, theories, and truths that matter</div>
                        <div className=' text-gray-700 px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md'>champion the curious, and give them access to the knowledge and learning they want, the freedom to act upon it, and the trust to use it responsibly</div>
                        <div className=' text-gray-700 px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md'>be a catalyst for meaningful, positive change in society – to enrich all of our lives.</div>
                    </div>
                    <p className='mt-5 text-gray-700'>We’re interested in working with the brightest minds to help make the world a better place. Find out more about working with us, or joining us as an author.</p>
                </div>

                <div className='md:w-[34%] border-t-[8px] border-yellow-500 h-fit bg-slate-100 px-5 py-8'>
                    {
                        navbar.map((item, index) => {
                            return <NavLink to={item.navlink} className={`text-sm text-gray-700 mt-2 flex gap-2 hover:underline items-center`}
                                style={({ isActive }) => {
                                    return isActive ? { textDecoration: "underline" } : {};
                                }}
                                key={index}><RxDoubleArrowRight /> {item.nav}</NavLink>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About