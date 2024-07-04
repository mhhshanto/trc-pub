import { useLoaderData } from 'react-router-dom'
import React, { useState } from 'react';
import { Input, FormLabel, Textarea } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import useAxios from '../hooks/useAxios';

function EditBlog() {
    const data = useLoaderData()
    const [loading, setLoading] = useState(false)
    const axiosPublic = useAxios();


    const submitPost =(e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const photo = form.photo.value;


        const formData = {
            title,
            img: photo,
            description,
            id: data?._id,
        };


        axiosPublic.patch('/edit-single-news', { formData })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    setLoading(false)
                    toast.success('Blog post successfully!')

                }
            })
            .catch(err => {
                toast.error(err.message)
                setLoading(false)
            })
    };



    return (
        <div className="md:min-h-screen ">
            <div className='rounded-md p-4 w-full shadow-lg border'>
                <h1 className='mb-6 font-semibold text-3xl '>Edit A Blog</h1>
                <form onSubmit={submitPost} className='w-full flex flex-col gap-y-5'>

                    <div className="mb-2 w-full md:w-[80%] lg:w-[60%] xl:w-[50%] rounded">
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <Input defaultValue={data?.title} required name='title' id='title' type="text" placeholder="Title" />
                    </div>

                    <div className="mb-2 w-full cursor-pointer md:w-[80%] lg:w-[60%] xl:w-[50%] rounded">
                        <FormLabel htmlFor="picture">Banner Photo</FormLabel>
                        <Input defaultValue={data?.img} required name='photo' id="picture" type="text" />
                    </div>
                    <div className="mb-2 w-full cursor-pointer md:w-[80%] lg:w-[60%] xl:w-[50%] rounded">
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Textarea defaultValue={data?.description} name='description' placeholder='Blog Description' />
                    </div>



                    {
                        loading ?
                            <Button className='w-[25%] rounded-md' disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button> :
                            <Button
                                type='submit'
                                className='w-[25%] !bg-amber-600 !text-white rounded-md'
                            >
                                Edit
                            </Button>
                    }

                </form>
            </div>
        </div>
    )
}

export default EditBlog