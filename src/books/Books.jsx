import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {

    const [arr, setArr] = useState([]);


    useEffect(() => {
        fetch('/public/book.json')
            .then(res => res.json())
            .then(data => setArr(data))
    }, [])


    return (
        <div className='min-h-screen lg:mt-40 mt-20 md:container mx-auto px-3'>
            <h1 className='text-center text-5xl font-bold pt-3  pb-4'>Books</h1>

            <div className='flex flex-wrap justify-center gap-x-10 sm:gap-y-14 gap-y-8'>
                {
                    arr.map((item, index) => {
                        return (
                            <Link to={`/books/${item?.slug}`} key={index} class="bg-white border border-gray-200 hover:shadow-xl transition duration-300 shadow dark:bg-gray-800 dark:border-gray-700 grid md:min-h-[400px] w-[500px] gap-x-3 grid-cols-2 p-3 h-full">

                                <img class="w-full h-full rounded-md" src={item?.img} alt="" />

                                <div class="flex flex-col justify-between">

                                    <div className='relative'>
                                        <div className='absolute w-full h-full bg-gradient-to-b from-transparent from-60%  to-[#ffffff]'></div>
                                        <h5 class="mb-2 text-xl font-semibold tracking-tight text-blue-900">{item?.title}</h5>
                                        <p className='mb-5'>{item?.wName}</p>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 md:line-clamp-6 line-clamp-4 ">{item?.des}</p>
                                    </div>

                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Books