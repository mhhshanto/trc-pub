import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function CustomModal() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const titles = [
        "Option One",
        "Option Two",
        "Option Three",
        "Option Four",
        "Option Five",
        "Option Six"
    ];

    return (
        <div>
            <button className='sm:py-2 py-[0.27rem] lg:px-4 md:px-4 px-2 !bg-[#A57C00] hover:bg-[#C09B30] transition duration-300 !rounded-full lg:text-base text-sm !text-white sm:font-semibold' onClick={onOpen}>Publish with us</button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {
                            titles.map((title, index) => {
                               
                            const dynamicTitle = title.split(' ').join('-');

                                return (
                                    <Link className='block' to={`/dynamicContent/${dynamicTitle}/journalist-access`} key={index}>
                                        <Button className='my-3 block' onClick={onClose}>{title}</Button>
                                    </Link>
                                )
                            })
                        }
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CustomModal