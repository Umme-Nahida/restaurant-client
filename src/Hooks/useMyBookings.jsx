import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMyBookings = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();

    const {refetch,data:userBookings} = useQuery({
        queryKey:['userBookings'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/userBookings/${user?.email}`)
            console.log(res)
            return res.data
        }
    })
    return [userBookings,refetch,]
};

export default useMyBookings;