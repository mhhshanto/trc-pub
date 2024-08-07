import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {

    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('/book.json')
            .then(res => res.json())
            .then(data => {
                setArr(data)
                setLoading(false)
            })
    }, [])


    if (loading) {
        return (
            <>

                <div className='min-h-screen flex justify-center items-center'>
                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>

                </div>

            </>
        )
    }


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
                                        <p className='mb-5 text-purple-800 font-semibold'>{item?.wName}</p>
                                        <p dangerouslySetInnerHTML={{ __html: item?.des }} class="mb-3 font-normal text-gray-700 dark:text-gray-400 md:line-clamp-[8] line-clamp-4 "></p>
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