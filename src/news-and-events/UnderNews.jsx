import React from 'react'
import { Link } from 'react-router-dom'
import useGetAllNews from '../hooks/useGetAllNews'

function UnderNews() {

    const [data] = useGetAllNews(6)


    return (
        <>
            <div className='md:container mx-auto px-3'>
                <div className='flex sm:flex-row flex-col gap-5 justify-between  sm:items-center my-10'>
                    <h1 className='sm:text-3xl text-2xl font-medium text-amber-700'>Press releases</h1>
                    <p className='sm:text-lg font-medium underline hover:no-underline cursor-pointer'>View all press releases</p>
                </div>

                <div className='flex flex-col xl:flex-row xl:gap-5 gap-20'>
                    <div className='xl:w-[66%] lg:w-[80%]'>
                        {/* <div className='flex gap-5 items-center'>
                            <p className='text-nowrap text-lg font-medium'>Filter by</p>
                            <select className='w-full border border-gray-300 py-2 px-3 rounded' name="" id="">
                                <option value="Latest (all releases)">Latest (all releases)</option>
                                <option value="TRC Sapphire Publisher News">TRC Sapphire Publisher News</option>
                                <option value="Most Popular Articles">Most Popular Articles</option>
                                <option value="Upcoming Events">Upcoming Events</option>
                                <option value="Journal Submissions">Journal Submissions</option>
                            </select>
                        </div> */}

                        {/* <div className='my-10 flex flex-col md:flex-row gap-10'>
                            <div className='relative md:mx-0 mx-auto bg-[url("https://newsroom.taylorandfrancisgroup.com/wp-content/uploads/2024/06/construction-300x200.png")] bg-no-repeat md:w-[40%] w-full h-60'>
                                <p className='bg-gray-50 absolute top-0 left-0 p-1'>Breaking research</p>
                            </div>
                            <div className='md:w-[60%] flex flex-col gap-5'>
                                <p className='text-sm text-gray-400'>June 20, 2024</p>
                                <h1 className='text-2xl font-semibold text-amber-700 underline'>Guess work can be taken out of big builds with new ECU application</h1>
                                <p className='text-lg'>Medium and large-scale construction projects will have a better chance of success if they are able to adhere to a set of success criteria, new research from Edith Cowan University (ECU) found. ECU Lecturer Dr Neda Kiani Mavi has developed a system that could help builders take the guess work out of the feasibility of construction projects. […]</p>
                            </div>
                        </div> */}

                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7'>
                            {
                                data?.map((item, index) => {
                                    return (
                                        <div key={index} className=''>
                                            <img className='w-full h-32' src={item?.img} alt="" />


                                            <p className='text-sm mt-5 mb-3 text-gray-400'>{item?.date}</p>
                                            <h1 className='text-xl font-semibold text-amber-700 underline'>{item?.title}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Link to={'/news/all-news'}>
                            <p className='mt-10 lg:mt-20 font-semibold text-xl underline hover:text-amber-700'>See More</p>
                        </Link>

                    </div>
                    <div className='xl:w-[34%] lg:w-[50%]'>
                        <div className='border-t-2 py-7 border-amber-700'>
                            <h1 className='text-2xl font-semibold text-amber-700'>Embargo Area</h1>
                            <p className='text-lg my-3'><span className='text-blue-900 font-semibold underline cursor-pointer'>Log in</span> to the Embargo Area for exclusive access to breaking research news, ahead of publication.</p>
                        </div>
                        <div className='border-t-2 py-7 border-amber-700'>
                            <h1 className='text-2xl font-semibold text-amber-700'>Contacts</h1>
                            <p className='text-lg my-3'>Find the best <span className='text-blue-900 font-semibold underline cursor-pointer'>contact</span> for all media queries.</p>
                        </div>
                        <div className='border-t-2 py-7 border-amber-700'>
                            <h1 className='text-2xl font-semibold text-amber-700'>Speak to an expert</h1>
                            <p className='text-lg my-3'>Our media relations managers can <span className='text-blue-900 font-semibold underline cursor-pointer'>connect you</span>  with experts in a range of subject areas across science and humanities, and in publishing</p>
                        </div>
                        <div className='border-t-2 py-7 border-amber-700'>
                            <h1 className='text-2xl font-semibold text-amber-700'>About TRC Sapphire Publisher</h1>
                            <p className='text-lg my-3'><span className='text-blue-900 font-semibold underline cursor-pointer'>Find out more </span> about our brands, history, and corporate responsibility.</p>
                        </div>
                        <div className='border-t-2 py-7 border-amber-700'>
                            <h1 className='text-2xl font-semibold text-amber-700'>Book reviews</h1>
                            <p className='text-lg my-3'>Book reviewers looking for copies can be ordered <span className='text-blue-900 font-semibold underline cursor-pointer'>here.</span></p>
                            <p className='text-lg my-3'>Journalists looking to access copies for news/interviews can request access <span className='text-blue-900 font-semibold underline cursor-pointer'>here.</span></p>
                        </div>
                    </div>
                </div>

                <div className='mt-24'>
                    <p className='text-2xl text-center  text-gray-400'>
                        TRC Sapphire Publisher is proud to support the following organisations
                    </p>
                    <div className='flex sm:justify-between justify-center gap-10 flex-wrap items-center mt-5'>
                        <img src="https://newsroom.taylorandfrancisgroup.com/wp-content/themes/JTF-child-group/img/logo-the-conversation.png" alt="" />
                        <img src="https://newsroom.taylorandfrancisgroup.com/wp-content/themes/JTF-child-group/img/logo-smc.png" alt="" />

                        <img src="https://newsroom.taylorandfrancisgroup.com/wp-content/themes/JTF-child-group/img/logo-aussmc.png" alt="" />
                        <img src="https://newsroom.taylorandfrancisgroup.com/wp-content/themes/JTF-child-group/img/logo-mcera.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-20 bg-amber-700 py-6'>
                <div className='flex items-center lg:container mx-auto px-3'>
                    <p className='md:text-xl font-medium text-white underline px-2 border-r border-gray-100'>Routledge.com</p>
                    <p className='md:text-xl font-medium text-white underline px-2 '>TRC Sapphire Publisher Online</p>
                </div>
            </div>
        </>
    )
}

export default UnderNews