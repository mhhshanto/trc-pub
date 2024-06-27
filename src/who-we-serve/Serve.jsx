import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Serve() {

    const blog1 = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2020/07/science-in-hd-research-300x200.jpg',
            title: 'Journal Authors',
            link:'/'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2019/09/green-chameleon-s9CC2SKySJM-unsplash.jpg',
            title: 'Book Authors',
            link:'/'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2019/09/instructors-and-students_800_320.jpg',
            title: 'Journal Editors',
            link:'/'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2019/09/patrick-robert-doyle-OvXht_wi5Ew-unsplash.jpg',
            title: 'Book Authors',
            link:'/'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/02/pexels-anthony-shkraba-4348078s-300x224.jpg',
            title: 'Journal Editors',
            link:'/'
        },

    ]

    const blog2 = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/02/cdc-Vqt9v7v6g44-Practitioners-300x215.jpg',
            title: 'Journal Authors',
            link:'/'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/national-cancer-institute-Cx0LsYrM_Ns-unsplash-300x200.jpg',
            title: 'Book Authors',
            link:'/'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/11/photo-government-600-300x200.jpg',
            title: 'Journal Editors',
            link:'/'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/01/hospital_unsplash-300x200.jpg',
            title: 'Book Authors',
            link:'/'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/03/bg-w79mIrYKcK4-300x66.jpg',
            title: 'Journal Editors',
            link:'/'
        },

    ]


    const blog3 = [
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2021/03/Societies-Web-Header-Photo_v1-768x240.jpg',
            title: 'Journal Authors',
            link:'/'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2019/09/becca-tapert-GnY_mW1Q6Xc-unsplash.jpg',
            title: 'Book Authors',
            link:'/'
        },
        {
            img: 'https://taylorandfrancis.com/wp-content/uploads/2019/09/scott-webb-udZnjsCzsE-unsplash.jpg',
            title: 'Journal Editors',
            link:'/'
        },
        

    ]

    return (
        <div className='lg:mt-28 mt-16'>
            <div className='bg-[url("https://taylorandfrancis.com/wp-content/uploads/2021/02/24865311989_167fb77aba_k-400.jpg")] bg-cover bg-no-repeat '>
                <div className='bg-[#00000082]'>
                    <h1 className='pt-20 pb-5 text-3xl md:container px-3 text-white'>Who We Serve</h1>
                    <h1 className='py-7 flex  gap-1 items-center md:container px-3 text-white'><Link className='hover:underline' to={'/'}>Home</Link> <RiArrowRightSLine className='text-2xl' /> Who We Serve</h1>
                </div>
            </div>

            <div className="md:container mx-auto px-3">
                <p className='text-lg mt-8 mb-12'>TRC Sapphire Publisher, a division of Informa, is a specialist in scholarly research and in helping academic and research communities make new breakthroughs. We curate, produce and publish scholarly research and reference-led content, enabling the latest academic thinking and discovery to be shared and built on.</p>

                <h1 className='text-gray-700 text-3xl pb-2 border-gray-300 border-b mb-6'>Academia</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                    {
                        blog1.map((item, index) => {
                            return (
                                <div key={index} style={{backgroundImage: `url("${item.img}")`}} className='bg-cover bg-no-repeat md:h-[280px] h-[240px]'>
                                    <div className='bg-[#3333335f] w-full h-full relative'>
                                        <p className='absolute bottom-3 left-0 right-0 mx-auto w-full text-white text-center text-lg font-semibold'>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <h1 className='text-gray-700 text-3xl pb-2 border-gray-300 border-b my-7'>Industry & Government</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                    {
                        blog2.map((item, index) => {
                            return (
                                <div key={index} style={{backgroundImage: `url("${item.img}")`}} className='bg-cover bg-no-repeat md:h-[280px] h-[240px]'>
                                    <div className='bg-[#3333335f] w-full h-full relative'>
                                        <p className='absolute bottom-3 left-0 right-0 mx-auto w-full text-white text-center text-lg font-semibold'>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <h1 className='text-gray-700 text-3xl pb-2 border-gray-300 border-b my-7'>Partners</h1>
                <div className='grid mb-14 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                    {
                        blog3.map((item, index) => {
                            return (
                                <div key={index} style={{backgroundImage: `url("${item.img}")`}} className='bg-cover bg-no-repeat md:h-[280px] h-[240px]'>
                                    <div className='bg-[#3333335f] w-full h-full relative'>
                                        <p className='absolute bottom-3 left-0 right-0 mx-auto w-full text-white text-center text-lg font-semibold'>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default Serve