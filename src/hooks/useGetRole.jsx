import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { ContextProvider } from '../auth/AuthProvider';
import useAxios from './useAxios'

function useGetRole() {
    const { user, loading } = useContext(ContextProvider);
    const axiosPublic = useAxios()
    const {data: userRole} = useQuery({
        queryKey: [user?.email,'userRole'],
        enabled: !loading,
        queryFn: async () => {
             const res = await axiosPublic.get(`/user-role/${user?.email}`)
             return res.data;
        }
    })

    return [userRole];
    
}

export default useGetRole