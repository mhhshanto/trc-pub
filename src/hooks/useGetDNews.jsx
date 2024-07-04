import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"

function useGetDNews() {
    const axiosPublic = useAxios();

    const { data, refetch } = useQuery({
        queryKey: ['all-news-dashboard'],
        queryFn: async () => {
            const result = await axiosPublic.get('/all-news-manage')
            return result.data;
        }
    })

    return [data, refetch]
}

export default useGetDNews