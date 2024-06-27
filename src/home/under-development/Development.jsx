import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from '@chakra-ui/react'

function Development() {
    return (
        <div>
            <section className='flex justify-center items-center h-screen'>

                <div className='px-20 py-10 border flex justify-center items-center flex-col shadow-lg rounded-md'>
                    <h1 className='md:text-4xl text-2xl font-medium uppercase'>Under Development</h1>
                    <Link className='mt-5' to='/'>
                        <Button>Go Back Home</Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Development