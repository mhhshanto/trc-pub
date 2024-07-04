import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"


function useGetAllNews(count) {
    const axiosPublic = useAxios();
    const { data } = useQuery({
        queryKey: ['all-news-data'],
        queryFn: async () => {
            const result = await axiosPublic.get(`/all-news?count=${count}`)
            return result.data;
        }
    })

    return [data]
}

export default useGetAllNews