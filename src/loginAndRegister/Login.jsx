import React, { useContext, useState } from 'react'
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom'
import { ContextProvider } from '../auth/AuthProvider';
import { Button } from '@chakra-ui/react';
import { toast } from 'react-hot-toast'

function Login() {
    const { signInUser } = useContext(ContextProvider);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    toast.success('Login successfully',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    )
                    setLoading(false)
                    navigate('/dashboard')
                }


            })
            .catch(err => {
                toast.error(err.message ,
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                )
                setLoading(false)

            })

    }


    return (
        <div className='lg:mt-32 mt-20 min-h-[70vh] flex justify-center items-center md:container mx-auto px-3'>
            <div className='lg:w-[50%] md:w-[60%] sm:w-[80%] w-full'>
                <h1 className='md:text-4xl text-3xl font-serif text-center font-medium'>My Account</h1>
                <div className='md:p-8 p-5 my-8 bg-gray-100 border-t-[7px] border-amber-600 mt-5'>
                    <h1 className='md:text-2xl text-xl mb-7 text-center'>TRC Sapphire Publisher SIGN IN</h1>

                    <form onSubmit={handleLogin}>
                        <div className='flex flex-col gap-y-1'>
                            <label className='font-semibold text-lg' htmlFor="email">Email Address</label>
                            <input required className='w-full px-3 py-[0.4rem] border border-gray-300' type="email" name="email" id="email" />
                        </div>
                        <div className='flex mt-4 flex-col gap-y-1'>
                            <label className='font-semibold text-lg' htmlFor="password">Password</label>
                            <input required className='w-full px-3 py-[0.4rem] border border-gray-300' type="password" name="password" id="password" />
                        </div>

                        {
                            loading ?
                                <Button
                                    isLoading
                                    loadingText='Loading'
                                    className='!bg-amber-700 !mt-4 w-[50%] !text-white'
                                    spinnerPlacement='end'
                                >
                                    Continue
                                </Button> :
                                <button type='submit' className='flex mt-4 items-center cursor-pointer bg-amber-600 text-white justify-center uppercase sm:text-lg text-sm font-semibold py-2 rounded w-[50%] gap-1'>

                                    Continue

                                    <RxDoubleArrowRight />
                                </button>
                        }

                        <div className='flex mt-4 gap-2 items-center'>
                            <Link to={'/register'}>
                                <p className='text-blue-950 underline'>Create an account</p>
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login