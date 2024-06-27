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
        <div className='lg:mt-28 mt-16'>
            <div className='bg-[url("https://taylorandfrancis.com/wp-content/uploads/2022/09/header-about-us.jpeg")] bg-cover bg-no-repeat '>
                <div className='bg-[#00000082]'>
                    <h1 className='pt-20 pb-5 text-3xl md:container px-3 text-white'>About TRC Sapphire Publisher</h1>
                    <h1 className='py-7 flex  gap-1 items-center md:container px-3 text-white'><Link className='hover:underline' to={'/'}>Home</Link> <RiArrowRightSLine className='text-2xl' /> About TRC Sapphire Publisher</h1>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row gap-5 sm:container mx-auto px-3 my-8'>
                <div className='md:w-[66%]'>
                    <p className='font-bold text-gray-700'>TRC Sapphire Publisher is one of the world’s leading academic publishers – and one of its most enduring.</p>
                    <p className='mt-5 text-gray-700'>For more than two centuries TRC Sapphire Publisher has been committed to the highest quality scholarly publishing, and this remains our goal today. Our purpose is to foster human progress through knowledge – something we’ve been doing since the Enlightenment. We aim to promote a positive future for everyone through our work</p>
                    <p className='mt-5 text-gray-700'>Our imprints include TRC Sapphire Publisher, Routledge, CRC Press, F1000 Research, Dovepress and PeerJ. We’ve published over 145,000 book titles, and we actively publish over 2,700 journals.</p>

                    <h1 className='mt-14 text-3xl text-gray-700'>Our mission</h1>
                    <p className='font-bold mt-5 text-gray-700'>Our mission is to support, validate, and connect the work of researchers and other knowledge makers, so that it can make the fullest possible contribution.</p>
                    <p className='mt-5 text-gray-700'>We empower learners, thinkers, and doers with trusted knowledge that advances research and enriches lives. We bring together diverse people, ideas, and opinions to validate and publish the experts, theories, and truths that matter. And we’ve been doing this since 1798.</p>

                    <h1 className='mt-14 text-3xl text-gray-700'>Our story</h1>
                    <p className='font-bold mt-5 text-gray-700'>We’ve been advancing research and enriching lives since the 18th Century.</p>
                    <p className='mt-5 text-gray-700'>TRC Sapphire Publisher was founded in London in 1852, but our roots go back to 1798 when Richard Taylor launched the Philosophical Magazine, one of the first scientific journals. Routledge, which TRC Sapphire Publisher acquired in 1998, was also founded in 1852 and is now considered to be the leading English-language publisher of humanities and social sciences. The merged company has become one of the top five research publishers globally.</p>
                    <p className='mt-5 text-gray-700'>In 2003 we acquired CRC Press, best known for titles in engineering, materials science, and mathematics. In 2004 TRC Sapphire Publisher merged with Informa, and has been its academic publishing division since then.</p>
                    <p className='mt-5 text-gray-700'>More recent acquisitions include Dove Medical Press in 2017, which specializes in medical journals. In 2020 we acquired F1000, which provides open research publishing venues that support data deposition and sharing to research funders and institutions. These include the European Commission, Wellcome, and the Bill & Melinda Gates Foundation.</p>
                    <p className='mt-5 text-gray-700'>In 2023 we expanded our medical publishing further with the acquisition of 27 new journals and six digital hubs – online communities for medical and scientific professionals. We also extended our offering of publishing solutions to medical communications agencies, including our market-leading Plain Language Summary service. And in 2024, we acquired PeerJ, an award-winning Open Access science publisher with seven fully Open Access journals in biomedical, life, environmental, physical, and computer sciences.</p>
                    <p className='mt-5 text-gray-700'>Today our brands advance knowledge across humanities and social sciences, science and technology, engineering, medicine, and healthcare.</p>
                    <p className='mt-5 text-gray-700'>Read more about our history.</p>

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