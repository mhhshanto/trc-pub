import React, {  useState } from 'react';
import { Input ,FormLabel, Textarea } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import useAxios from '../hooks/useAxios';


const img_hosting_api = `https://api.imgbb.com/1/upload?key=dba83ae483256811942a712f4a815835`

function PostBlog() {
    const [loading, setLoading] = useState(false)
    const axiosPublic = useAxios();


    const submitPost = async (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const photo = form.photo.files[0];
        const imgFile = { image: photo }
        const res = await axiosPublic.post(img_hosting_api, imgFile, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        })
        const img_url = res?.data?.data?.display_url;

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        // create date
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = monthNames[currentDate.getMonth()]; 
        const year = currentDate.getFullYear();
        const postedDate = `${month} ${day}, ${year}`;

        const formData = {
            title,
            img: img_url,
            description,
            date: postedDate
        };


        if (img_url) {

            axiosPublic.post('/single-news', { formData })
                .then(res => {
                    if (res.data.acknowledged) {
                        setLoading(false)
                        toast.success('Blog post successfully!')

                    }
                })
                .catch(err => {
                    setLoading(false)
                })
        }else{
            toast.error('Photo is not support!')
            setLoading(false)
        }

    };

    return (
        <div className="md:min-h-screen ">
            <div className='rounded-md p-4 w-full shadow-lg border'>
                <h1 className='mb-6 font-semibold text-3xl '>Post A Blog</h1>
                <form onSubmit={submitPost} className='w-full flex flex-col gap-y-5'>

                    <div className="mb-2 w-full md:w-[80%] lg:w-[60%] xl:w-[50%] rounded">
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <Input required name='title' id='title' type="text" placeholder="Title" />
                    </div>

                    <div className="mb-2 w-full cursor-pointer md:w-[80%] lg:w-[60%] xl:w-[50%] rounded">
                        <FormLabel htmlFor="picture">Banner Photo</FormLabel>
                        <Input required name='photo' id="picture" type="file" />
                    </div>
                    <div className="mb-2 w-full cursor-pointer md:w-[80%] lg:w-[60%] xl:w-[50%] rounded">
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Textarea name='description' placeholder='Blog Description' />
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
                                Submit
                            </Button>
                    }

                </form>
            </div>
        </div>
    )
}

export default PostBlog