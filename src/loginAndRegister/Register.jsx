import { Button } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom'
import { ContextProvider } from '../auth/AuthProvider';
import { toast } from 'react-hot-toast'
import useAxios from '../hooks/useAxios';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase.config';

function Register() {
    const { createUser } = useContext(ContextProvider);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const axiosPublic = useAxios()

    const handleRegister = e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const firstName = form.fName.value;
        const lastName = form.lName.value;
        const email = form.email.value;
        const password = form.password.value;
        //    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        //    if(!passwordRegex.test(password)){
        //       return alert('password in valid')
        //    }
        const registerValue = { firstName, lastName, email, password };
        //    console.log(registerValue);
        createUser(email, password)
            .then(result => {
                if (result.user) {

                    updateProfile(auth.currentUser, {
                        displayName: `${firstName} ${lastName}`
                    }).then(() => {

                        axiosPublic.post('/user', { registerValue })
                            .then(res => {
                                if (res.data.acknowledged) {
                                    toast.success('user created successfully',
                                        {
                                            style: {
                                                borderRadius: '10px',
                                                background: '#333',
                                                color: '#fff',
                                            },
                                        }
                                    )
                                    setLoading(false)
                                    navigate('/dashboard');
                                }
                            })

                    })
                        .catch(err => {
                            toast.error(err.message,
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
            })
            .catch(err => {
                toast.error(err.message,
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
                <h1 className='md:text-4xl text-3xl font-serif text-center font-medium'>Create an Account</h1>
                <div className='md:p-8 p-5 my-8 bg-gray-100 border-t-[7px] border-amber-600 mt-5'>
                    <h1 className='md:text-2xl text-xl mb-7 text-center '>TRC Sapphire Publisher REGISTRATION</h1>

                    <form onSubmit={handleRegister}>
                        <div className='flex flex-col gap-y-1'>
                            <label className='font-semibold text-lg' htmlFor="fName">First Name</label>
                            <input required className='w-full px-3 py-[0.3rem] border border-gray-300' type="text" name="fName" id="fName" />
                        </div>
                        <div className='flex flex-col gap-y-1 mt-4'>
                            <label className='font-semibold text-lg' htmlFor="lName">Last Name</label>
                            <input className='w-full px-3 py-[0.3rem] border border-gray-300' type="text" name="lName" id="lName" />
                        </div>

                        <div className='flex flex-col gap-y-1 mt-4'>
                            <label className='font-semibold text-lg' htmlFor="email">Email Address</label>
                            <input required className='w-full px-3 py-[0.3rem] border border-gray-300' type="email" name="email" id="email" />
                        </div>
                        <div className='flex mt-4 flex-col gap-y-1'>
                            <label className='font-semibold text-lg' htmlFor="password">Password</label>
                            <input required className='w-full px-3 py-[0.3rem] border border-gray-300' type="password" name="password" id="password" />
                        </div>

                        {
                            loading ?
                                <Button
                                    isLoading
                                    loadingText='Loading'
                                    className='!bg-amber-700 w-[50%] !mt-4 !text-white'
                                    spinnerPlacement='end'
                                >
                                    Continue
                                </Button> :
                                <button type='submit' className='flex mt-4 items-center cursor-pointer bg-amber-600 text-white justify-center uppercase sm:text-lg text-sm  font-semibold py-2 rounded sm:w-[50%] px-3 gap-1'>

                                    Create my account

                                    <RxDoubleArrowRight />
                                </button>
                        }

                        <div className='flex mt-4 gap-2 items-center'>
                            <Link to={'/login'}>
                                <p className='text-blue-950 underline'>I already have an account »</p>
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register