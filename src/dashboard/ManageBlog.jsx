import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import useGetDNews from '../hooks/useGetDNews'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxios from '../hooks/useAxios';
import { Link } from 'react-router-dom'

function ManageBlog() {
  const [data, refetch] = useGetDNews();
  const axiosPublic = useAxios();

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosPublic.delete(`/delete-news/${id}`)
          .then(res => {
            if (res.data) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();
            }
          })
          .catch(err => {
            Swal.fire({
              title: "Error",
              text: err.message,
              icon: "error"
            });
          })
      }
    });
  }

  return (
    <div>
      <h1 className='mb-6 font-semibold md:text-3xl text-2xl'>Manage Blogs</h1>
      <div className='border'>
        {
          data ?
            <TableContainer>
              <Table variant='striped' colorScheme='orange'>
                <Thead>
                  <Tr>
                    <Th>No.</Th>
                    <Th>Title</Th>
                    <Th>Date</Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>

                  {

                    data?.map((item, index) => {

                      const truncatedTitle = item?.title.length > 50 ? item?.title.substring(0, 50) + '...' : item?.title;

                      return (
                        <Tr key={index} >
                          <Td className='!py-4'>{index + 1}</Td>
                          <Td className='!py-4'>{truncatedTitle}</Td>
                          <Td className='!py-4'>{item?.date}</Td>
                          <Td className='!py-2'>
                            <Link to={`/dashboard/edit-blog/${item?._id}`}>
                              <button className='bg-amber-200 hover:bg-orange-300 p-2 rounded-full'>
                                <MdOutlineEdit />
                              </button>
                            </Link>
                          </Td>
                          <Td className='!py-2'>
                            <button onClick={() => handleDelete(item?._id)} className='bg-amber-600 hover:bg-amber-500 text-white p-2 rounded-full'>
                              <RiDeleteBin6Line />
                            </button>
                          </Td>
                        </Tr>
                      )
                    })

                  }
                </Tbody>
              </Table>
            </TableContainer> :
            <>
              <div className='min-h-[40vh] w-full flex justify-center items-center bg-gray-50'>

                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-300 h-20 w-20"></div>
                <p className="ml-4 text-xl">Please wait...</p>

              </div>
            </>
        }
      </div>
    </div>
  )
}

export default ManageBlog