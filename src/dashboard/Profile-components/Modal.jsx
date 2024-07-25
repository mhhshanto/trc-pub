import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalCloseButton,
    Button,
    FormLabel,
    Input
} from '@chakra-ui/react'
import { useState } from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { ContextProvider } from '../../auth/AuthProvider'
import useAxios from '../../hooks/useAxios'
import useGetACourse from '../../hooks/useGetACourse'


function ModalCustom() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useContext(ContextProvider);
    const axiosPublic = useAxios()
    const [loading, setLoading] = useState(false);
    const [,refetch] = useGetACourse()

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const institution = form.Institution.value;
        const department = form.Department.value;
        const courseName = form.CourseName.value;
        const courseStartDate = form.CourseStartDate.value;
        const decisionDate = form.DecisionDate.value;
        const numberOfStudents = form.NumberOfStudents.value;

        const course = {
            institution,
            department,
            courseName,
            courseStartDate,
            decisionDate,
            numberOfStudents,
            email: user?.email,
        }
        axiosPublic.post('/instructor-course', { course })
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success("Saved The Course")
                    setLoading(false)
                    onClose()
                    refetch()
                    
                }
            })
            .catch(err => {
                if (err.message) {
                    toast.error("There is an error")
                    setLoading(false)
                    onClose()
                }
            })

    }

    return (
        <div>
            <Button onClick={onOpen} className='uppercase mt-5' variant={'outline'}>+ Add Course</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <form onSubmit={handleSubmit}>
                    <ModalContent minWidth='fit-content'>


                        <div className=' mt-3 pl-4 text-xl font-normal'>
                            University & Course Information
                        </div>

                        <div className='md:px-5 px-3 text-black sm:w-[700px]' >

                            <div className="mt-4 w-full rounded">
                                <FormLabel htmlFor="Institution">* Institution</FormLabel>
                                <Input required name='Institution' id='Institution' type="text" />
                            </div>
                            <div className="mt-4 w-full rounded">
                                <FormLabel htmlFor="Department">* Department</FormLabel>
                                <Input required name='Department' id='Department' type="text" />
                            </div>
                            <div className="mt-4 w-full rounded">
                                <FormLabel htmlFor="CourseName">* Course Name</FormLabel>
                                <Input required name='CourseName' id='CourseName' type="text" />
                            </div>
                            <div className="mt-5 w-full rounded">
                                <FormLabel htmlFor="CourseStartDate">* Course Start Date</FormLabel>
                                <Input required name='CourseStartDate' id='CourseStartDate' type="date" />
                            </div>
                            <div className="mt-5 w-full rounded">
                                <FormLabel htmlFor="DecisionDate">Decision Date</FormLabel>
                                <Input name='DecisionDate' id='DecisionDate' type="date" />
                            </div>
                            <div className="mt-4 w-full rounded">
                                <FormLabel htmlFor="NumberOfStudents">* Number of Students</FormLabel>
                                <Input required name='NumberOfStudents' id='NumberOfStudents' type="text" />
                            </div>

                        </div>

                        <ModalCloseButton />
                        <ModalFooter>
                            {loading ?
                                <Button variant='outline' 
                                 isLoading
                                 loadingText='Loading'
                                 className='uppercase' colorScheme='blue' mr={3}>
                                    Save Course
                                </Button>
                                :
                                <Button type='submit' className='uppercase' colorScheme='blue' mr={3}>
                                    Save Course
                                </Button>
                            }
                            <Button onClick={onClose} className='uppercase' variant='outline'>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </div>
    )
}

export default ModalCustom