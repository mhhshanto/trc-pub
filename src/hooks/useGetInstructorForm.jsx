import React, { useContext } from 'react'
import { ContextProvider } from '../auth/AuthProvider';
import useAxios from './useAxios';
import { useQuery } from "@tanstack/react-query"

function useGetInstructorForm() {
    const axiosPublic = useAxios()
    const {user} = useContext(ContextProvider);
  
    const {data: formValue, refetch} = useQuery({
      queryKey:['ins-form', user?.email],
      queryFn: async () => {
          const course = await axiosPublic(`/instructor-form/${user?.email}`)
          return course.data;
      }
    })
  
  
    return [formValue, refetch];
}

export default useGetInstructorForm