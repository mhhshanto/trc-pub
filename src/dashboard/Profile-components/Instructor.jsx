import { Button, FormLabel, Input, Select } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { RiInformation2Fill } from "react-icons/ri";
import { ContextProvider } from '../../auth/AuthProvider';
import useAxios from '../../hooks/useAxios';
import useGetACourse from '../../hooks/useGetACourse';
import ModalCustom from './Modal';
import toast from 'react-hot-toast'
import useGetInstructorForm from '../../hooks/useGetInstructorForm';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'


function Instructor() {
    const [course] = useGetACourse();
    const { user } = useContext(ContextProvider);
    const axiosPublic = useAxios()
    const [loading, setLoading] = useState(false);
    const [formValue, refetch] = useGetInstructorForm();

    // console.log(formValue);


    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const country = form.country.value;
        const teachingCredentials = form.teachingCredentials.value;
        const streetAddress = form.streetAddress.value;
        const city = form.city.value;
        const state = form.state.value;
        const postalCode = form.postalCode.value;
        const formData = {
            firstName,
            lastName,
            email,
            jobTitle,
            country,
            teachingCredentials,
            streetAddress,
            city,
            state,
            postalCode,
            currentEmail: user?.email,
        }

        axiosPublic.post('/instructor-form', { formData })
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success("Saved The Form value")
                    setLoading(false)
                    refetch()
                }
            })
            .catch(err => {
                if (err.message) {
                    toast.error("There is an error")
                    setLoading(false)
                }
            })
    }

    const handleClear = () => {
        document.getElementById("instructor-form").reset();
    }

    return (
        <div className='2xl:w-[50%] xl:w-[70%]'>

            <h1 className='border-b-2 border-gray-600 text-[27px] pb-2'>Auto-populate Inspection Copy Form</h1>

            <div>
                <Accordion w={'fit-content'} defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton sx={{
                                "&:hover": {
                                    backgroundColor: "initial",
                                    color: "initial",
                                }
                            }}>
                                <p className='text-lg mt-3 text-blue-950 flex items-center gap-1'>
                                    <RiInformation2Fill />
                                    <span className='uppercase font-semibold'>What will this do?</span>
                                </p>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} sx={{bg:'#fff3cd'}}>
                        <span className='font-semibold'>To expedite the process of future inspection copy requests,</span> any saved field values below will auto-populate into the corresponding field on the Inspection Copy request form, once signed in.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            <p className='p-2 bg-gray-100 border text-2xl font-semibold mt-5'>University & Course Information</p>
            <div>
                {
                    course ?
                        <div className='md:text-lg my-4'>
                            <p className='mt-2'><span className='font-semibold'>Institution</span>: {course?.institution}</p>
                            <p className='mt-2'><span className='font-semibold'>Course Name</span>: {course?.courseName}</p>
                            <p className='mt-2'><span className='font-semibold'>Department</span>: {course?.department}</p>
                            <p className='mt-2'><span className='font-semibold'>Course Start Date</span>: {course?.courseStartDate}</p>
                            <p className='mt-2'><span className='font-semibold'>Decision Date</span>: {course?.decisionDate}</p>
                            <p className='mt-2'><span className='font-semibold'>Number of Students</span>: {course?.numberOfStudents}</p>
                        </div>
                        :
                        <div className='flex flex-col justify-center items-center'>
                            <ModalCustom />
                        </div>

                }

            </div>
            <p className='p-2 bg-gray-100 border text-2xl font-semibold mt-5'>Instructor's Contact Information</p>

            {
                formValue ?
                    <div>
                        <div className='md:text-lg my-4'>
                            <p className='mt-2'><span className='font-semibold'>First Name</span>: {formValue?.firstName}</p>
                            <p className='mt-2'><span className='font-semibold'>Last Name</span>: {formValue?.lastName}</p>
                            <p className='mt-2'><span className='font-semibold'>Email</span>: {formValue?.email}</p>
                            <p className='mt-2'><span className='font-semibold'>Job Title</span>: {formValue?.jobTitle}</p>
                            <p className='mt-2'><span className='font-semibold'>Country</span>: {formValue?.country}</p>
                            <p className='mt-2'><span className='font-semibold'>City</span>: {formValue?.city}</p>
                            <p className='mt-2'><span className='font-semibold'>State</span>: {formValue?.state}</p>
                            <p className='mt-2'><span className='font-semibold'>Postal Code</span>: {formValue?.postalCode}</p>
                            <p className='mt-2'><span className='font-semibold'>Street Address</span>: {formValue?.streetAddress}</p>
                            <p className='mt-2'><span className='font-semibold'>Teaching Credentials</span>: {formValue?.teachingCredentials}</p>

                        </div>
                    </div>
                    :
                    <form id='instructor-form' onSubmit={handleSubmit}>
                        <div className="mt-4 w-full rounded">
                            <FormLabel htmlFor="firstName">First Name</FormLabel>
                            <Input required name='firstName' id='firstName' type="text" />
                        </div>
                        <div className="mt-2 w-full rounded">
                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                            <Input required name='lastName' id='lastName' type="text" />
                        </div>
                        <div className="mt-2 w-full rounded">
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input required name='email' id='email' type="email" />
                            <p className='text-sm'>Email of teaching professor/lecturer. Please do not use a shared email address.</p>
                        </div>
                        <div className="mt-2 w-full rounded">
                            <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
                            <Input required name='jobTitle' id='jobTitle' type="text" />
                        </div>
                        <div className="mt-2 w-full rounded">
                            <FormLabel htmlFor="country">Country</FormLabel>
                            <Select required name='country' id='country' placeholder='Select country'>
                                <option value="usa">United States</option>
                                <option value="canada">Canada</option>
                                <option value="mexico">Mexico</option>
                                <option value="brazil">Brazil</option>
                                <option value="bangladesh">Bangladesh</option>
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
                            <FormLabel htmlFor="teachingCredentials">Verified Teaching Credentials</FormLabel>
                            <Input required name='teachingCredentials' id='teachingCredentials' type="text" placeholder='Enter URL' />
                            <p className='text-sm mt-1'>
                                If this is your first time ordering an inspection copy, please enter the URL to your teaching credentials (for example, a listing in your institution’s directory or your department webpage) to help us expedite the confirmation of your request.
                            </p>
                        </div>
                        <p className='p-2 bg-gray-100 border text-2xl font-semibold mt-5'>Mailing Address</p>

                        <div className="mt-2 w-full rounded">
                            <FormLabel htmlFor="streetAddress">Street Address</FormLabel>
                            <Input required name='streetAddress' id='streetAddress' type="text" />
                            <p className='text-sm'>We are unable to ship to PO Boxes. Maximum 30 characters allowed.</p>
                        </div>
                        <div className="mt-2 w-full rounded">
                            <FormLabel htmlFor="city">Town / City</FormLabel>
                            <Input required name='city' id='city' type="text" />
                        </div>
                        <div className="mt-2 w-full rounded">
                            <FormLabel htmlFor="state">State / Province / Region</FormLabel>
                            <Input required name='state' id='state' type="text" />
                            <p className='text-sm'>If applicable</p>
                        </div>
                        <div className="mt-2 w-full rounded">
                            <FormLabel htmlFor="postalCode">ZIP / Postal Code</FormLabel>
                            <Input required name='postalCode' id='postalCode' type="text" />
                            <p className='text-sm'>If unavailable, please use 'N/A'</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            {loading ?
                                <Button variant='outline'
                                    isLoading
                                    loadingText='Loading'
                                    className='uppercase'>
                                    Save Course
                                </Button>
                                :
                                <Button type='submit' className='uppercase mt-5 !px-10'>
                                    Save Values
                                </Button>
                            }
                            <Button variant={'outline'} className='uppercase mt-5' onClick={handleClear}>
                                Clear Values
                            </Button>
                        </div>
                    </form>
            }

        </div>
    )
}

export default Instructor