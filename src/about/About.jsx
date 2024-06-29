import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri";
import { RxDoubleArrowRight } from "react-icons/rx";

function About() {

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
        // {
        //     nav: 'Our history',
        //     navlink: '/under-development'
        // },
        {
            nav: 'Careers',
            navlink: '/careers'
        },
        // {
        //     nav: 'Our policies',
        //     navlink: '/under-development'
        // },
        // {
        //     nav: 'Corporate responsibility',
        //     navlink: '/under-development'
        // },
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
                    <p className='font-bold text-gray-700'>TRC Sapphire Publisher is one of the world’s leading academic publishers – and one of its most enduring.</p>
                    <p className='mt-5 text-gray-700'><span className='font-bold'>TRC Sapphires Publisher</span> stands as a cornerstone in the academic publishing realm, dedicated to advancing knowledge, fostering critical thinking, and amplifying scholarly discourse. With a steadfast commitment to academic excellence, integrity, and innovation, TRC Sapphires Publisher serves as a trusted partner for academics, researchers, and institutions worldwide.</p>

                    <h1 className='mt-14 text-3xl text-gray-700'>Mission Statement:</h1>
                    
                   <div className='mt-5'>
                   <li className='mt-3'>Our mission at TRC Sapphires Publisher is to facilitate the dissemination of cutting-edge research, scholarly insights, and educational resources that shape the future of academia and society. </li>
                   <li className="mt-3">We are driven by a passion for knowledge and a commitment to empowering scholars to make meaningful contributions to their fields.</li>
                   <li className="mt-3">Publishing a book is a significant milestone for any author, and choosing the right publisher can make all the difference.</li>
                   <li className="mt-3">Converting a thesis into a book is a significant endeavor that requires careful planning, restructuring, and refining to adapt the content for a broader audience and publication format</li>
                   </div>

                    <h1 className='mt-14 text-3xl text-gray-700'>Why Choose TRC Sapphires Publisher:</h1>
                    <p className='mt-5 text-gray-700'>
                    Publishing an academic book is a significant milestone in any scholar's career, and choosing the right publisher is crucial for maximizing the impact and visibility of your work.
                    </p>

                    

                    <p className='font-bold mt-5 text-gray-700'>Here are 10 compelling reasons why you should consider publishing your academic book with TRC Publisher:</p>

                    <div className='mt-5'>
                        <div className='flex gap-2 mt-3'>
                            <span className='font-bold'>1.</span>
                        <p className=''><span className='font-bold'>
                         Academic Excellence:
                            </span> TRC Publisher is dedicated to upholding the highest standards of academic rigor and quality, ensuring that your book meets the rigorous standards of scholarship and research.</p>
                        </div>

                        <div className='flex gap-2 mt-3'>
                            <span className='font-bold'>2.</span>
                        <p className=''><span className='font-bold'>
                         Expertise in Academic Publishing:
                            </span> With years of experience in academic publishing, TRC Publisher understands the unique needs and challenges of scholars and researchers, providing expert guidance and support throughout the publishing process.</p>
                        </div>

                        <div className='flex gap-2 mt-3'>
                            <span className='font-bold'>3.</span>
                        <p className=''><span className='font-bold'>
                        Personalized Approach:
                            </span>They offer a personalized approach to publishing, taking the time to understand each author's unique vision and goals for their academic book.</p>
                        </div>

                        <div className='flex gap-2 mt-3'>
                            <span className='font-bold'>4.</span>
                        <p className=''><span className='font-bold'>
                        Quality Production:
                            </span>TRC Publisher is committed to producing high-quality books, ensuring that every aspect of the publishing process, from editing to design, meets the highest standards.</p>
                        </div>

                        <div className='flex gap-2 mt-3'>
                            <span className='font-bold'>5.</span>
                        <p className=''><span className='font-bold'>
                        Global Distribution Networks:
                            </span>With extensive distribution networks, including academic libraries, bookstores, and online platforms, TRC Publisher ensures that your book reaches a global audience of scholars, researchers, and students. They provide comprehensive marketing support, helping authors promote their books through various channels, including social media, book signings, and author events</p>
                        </div>

                        <div className='flex gap-2 mt-3'>
                            <span className='font-bold'>6.</span>
                        <p className=''><span className='font-bold'>
                        Professional Editorial Services:
                            </span> TRC Publisher provides professional editorial services, including copyediting, formatting, and indexing, to ensure clarity, coherence, and precision in your academic writing. TRC Publisher employs a rigorous peer review process to ensure the quality and credibility of your academic work, maintaining the integrity of scholarly research and enhancing its academic impact.</p>
                        </div>

                        <div className='flex gap-2 mt-3'>
                            <span className='font-bold'>7.</span>
                        <p className=''><span className='font-bold'>
                        Personalized Support:
                            </span> TRC Publisher offers personalized support and guidance to authors, providing strategic advice on manuscript development, publication strategies, and academic career advancement.</p>
                        </div>

                        <div className='flex gap-2 mt-3'>
                            <span className='font-bold'>8.</span>
                        <p className=''><span className='font-bold'>
                        Author Rights and Ownership:
                            </span> TRC Publisher respects author rights and ownership, allowing you to retain control over your intellectual property and ensuring that your academic work is protected and respected. TRC Publisher respects author rights and ownership, allowing you to retain control over your intellectual property and ensuring that your academic work is protected and respected.</p>
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <span className='font-bold'>9.</span>
                        <p className=''><span className='font-bold'>
                        Long-Term Partnership:
                            </span> TRC Publisher views the author-publisher relationship as a long-term partnership, providing ongoing support and opportunities for authors beyond the initial publication of their book. TRC Publisher is committed to making a positive impact on academia and society by disseminating innovative research, critical insights, and educational resources that advance knowledge and address pressing societal challenges.</p>
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <span className='font-bold'>10.</span>
                        <p className=''><span className='font-bold'>
                        Commitment to Impactful Research:
                            </span> By partnering with TRC Publisher, corporate entities demonstrate a commitment to producing impactful research and contributing to the advancement of knowledge within their industries, fostering innovation and growth.</p>
                        </div>

                        
                        
                        
                        
                        
                        
                        
                        
                    </div>

                    <p className='mt-5 text-gray-700'>
                    At TRC Sapphires Publisher, we believe that academic publishing is not just about disseminating knowledge but also about inspiring intellectual curiosity, fostering interdisciplinary dialogue, and shaping the future of scholarship. Join us in our mission to elevate academic excellence and contribute to the advancement of knowledge and understanding in every field of study.
                    </p>

                    <h1 className='mt-14 text-3xl text-gray-700'>A commitment to people and knowledge</h1>
                    <p className='font-bold mt-5 text-gray-700'>Knowledge empowers people to think, do, and be more than they ever could before.</p>
                    <p className='mt-5 text-gray-700'>As a global publishing company that believes in making top quality research accessible to more people all around the world, we strive to:</p>
                    <div className='ml-5 mt-4'>
                        <li>bring together diverse people, ideas and opinions to publish the experts, theories, and truths that matter</li>
                        <li>champion the curious, and give them access to the knowledge and learning they want, the freedom to act upon it, and the trust to use it responsibly</li>
                        <li>be a catalyst for meaningful, positive change in society – to enrich all of our lives.</li>
                    </div>
                    <p className='mt-5 text-gray-700'>We’re interested in working with the brightest minds to help make the world a better place. Find out more about working with us, or joining us as an author.</p>
                </div>

                <div className='md:w-[34%] border-t-[8px] border-yellow-500 h-fit bg-slate-100 px-5 py-8'>
                      {
                        navbar.map((item,index)=> {
                            return <NavLink to={item.navlink} className={`text-sm text-gray-700 mt-2 flex gap-2 hover:underline items-center`}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: "underline" } : {};
                                }}
                             key={index}><RxDoubleArrowRight/> {item.nav}</NavLink>
                        })
                      }
                </div>
            </div>
        </div>
    )
}

export default About