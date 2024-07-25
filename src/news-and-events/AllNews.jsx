import React from 'react'
import useGetAllNews from '../hooks/useGetAllNews'

function AllNews() {
    const [data] = useGetAllNews('all')

    return (
        <div className='lg:container mx-auto px-3 lg:mt-40 mt-24 md:mb-20 mb-10'>
            <h1 className='sm:text-3xl text-2xl font-medium text-amber-700 mb-5 md:mb-10'>Press releases</h1>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7'>
                {
                    data?.map((item, index) => {
                        return (
                            <div key={index} className=''>
                                <img className='w-full h-40' src={item?.img} alt="" />


                                <p className='text-sm mt-5 mb-3 text-gray-400'>{item?.date}</p>
                                <h1 className='text-xl font-semibold text-amber-700 underline'>{item?.title}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllNews