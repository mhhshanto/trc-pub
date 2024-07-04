import { Button, FormLabel, Input, Select } from '@chakra-ui/react';
import React from 'react'
import { RiInformation2Fill } from "react-icons/ri";

function Instructor() {
    return (
        <div className='2xl:w-[50%] xl:w-[70%]'>

            <h1 className='border-b-2 border-gray-600 text-[27px] pb-2'>Auto-populate Inspection Copy Form</h1>
            <p className='text-lg mt-3 text-blue-950 flex items-center gap-1'>
                <RiInformation2Fill />
                <span className='uppercase font-semibold'>What will this do?</span>
            </p>

            <p className='p-2 bg-gray-100 border text-2xl font-semibold mt-5'>University & Course Information</p>
            <div className='flex justify-center items-center'>
                <Button className='uppercase mt-5' variant={'outline'}>+ Add Course</Button>
            </div>
            <p className='p-2 bg-gray-100 border text-2xl font-semibold mt-5'>Instructor's Contact Information</p>

            <div className="mt-4 w-full rounded">
                <FormLabel htmlFor="">First Name</FormLabel>
                <Input required name='' id='' type="text" />
            </div>
            <div className="mt-2 w-full rounded">
                <FormLabel htmlFor="">Last Name</FormLabel>
                <Input required name='' id='' type="text" />
            </div>
            <div className="mt-2 w-full rounded">
                <FormLabel htmlFor="">Email Address</FormLabel>
                <Input required name='' id='' type="email" />
                <p className='text-sm'>Email of teaching professor/lecturer. Please do not use a shared email address.</p>
            </div>
            <div className="mt-2 w-full rounded">
                <FormLabel htmlFor="">Job Title</FormLabel>
                <Input required name='' id='' type="text" />
            </div>
            <div className="mt-2 w-full rounded">
                <FormLabel htmlFor="">Country</FormLabel>
                <Select placeholder='Select country'>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="mexico">Mexico</option>
                    <option value="brazil">Brazil</option>
                    <option value="argentina">Argentina</option>
                    <option value="uk">United Kingdom</option>
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                    <option value="italy">Italy</option>
                    <option value="spain">Spain</option>
                    <option value="russia">Russia</option>
                    <option value="china">China</option>
                    <option value="japan">Japan</option>
                    <option value="india">India</option>
                    <option value="south_korea">South Korea</option>
                    <option value="australia">Australia</option>
                    <option value="new_zealand">New Zealand</option>
                    <option value="south_africa">South Africa</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="egypt">Egypt</option>

                </Select>
            </div>
            <div className="mt-2 w-full rounded">
                <FormLabel htmlFor="">Verified Teaching Credentials</FormLabel>
                <Input required name='' id='' type="text" placeholder='Enter URL' />
                <p className='text-sm mt-1'>
                    If this is your first time ordering an inspection copy, please enter the URL to your teaching credentials (for example, a listing in your institution’s directory or your department webpage) to help us expedite the confirmation of your request.
                </p>
            </div>
            <p className='p-2 bg-gray-100 border text-2xl font-semibold mt-5'>Mailing Address</p>

            <div className="mt-2 w-full rounded">
                <FormLabel htmlFor="">Street Address</FormLabel>
                <Input required name='' id='' type="text" />
                <p className='text-sm'>We are unable to ship to PO Boxes. Maximum 30 characters allowed.</p>
            </div>
            <div className="mt-2 w-full rounded">
                <FormLabel htmlFor="">Town / City</FormLabel>
                <Input required name='' id='' type="text" />
            </div>
            <div className="mt-2 w-full rounded">
                <FormLabel htmlFor="">State / Province / Region</FormLabel>
                <Input required name='' id='' type="text" />
                <p className='text-sm'>If applicable</p>
            </div>
            <div className="mt-2 w-full rounded">
                <FormLabel htmlFor="">ZIP / Postal Code</FormLabel>
                <Input required name='' id='' type="text" />
                <p className='text-sm'>If unavailable, please use 'N/A'</p>
            </div>
            <div className='flex gap-5 items-center'>
            <Button className='uppercase mt-5 !px-10' 
            >Save Values</Button>
            <Button variant={'outline'} className='uppercase mt-5' 
            >clear Values</Button>
            </div>

        </div>
    )
}

export default Instructor