import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { ContextProvider } from "../auth/AuthProvider"
import useAxios from "./useAxios"


function useGetACourse() {
  const axiosPublic = useAxios()
  const {user} = useContext(ContextProvider);

  const {data: course, refetch} = useQuery({
    queryKey:['ins-course', user?.email],
    queryFn: async () => {
        const course = await axiosPublic(`/instructor-course/${user?.email}`)
        return course.data;
    }
  })


  return [course,refetch];
}

export default useGetACourse